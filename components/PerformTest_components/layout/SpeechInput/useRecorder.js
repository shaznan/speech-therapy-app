import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

//Record user audio through microphone, convert recorded data to base64BinaryData and send binary data to backend to transcribe into words

const useRecorder = () => {
  const isRecording = useSelector((state) => state.performtest.isRecording);
  const [chunks, setChunks] = useState([]);
  const [recorder, setRecorder] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const dispatch = useDispatch();

  const resetState = () => {
    setChunks([]);
    setRecorder(null);
    setLocalStream(null);
  };

  useEffect(() => {
    //get access to browser mic
    async function requestRecorder() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setLocalStream(stream);
      return new MediaRecorder(stream);
    }
    //set microphone permission access status
    navigator.permissions
      .query({ name: "microphone" })
      .then(function (permissionStatus) {
        dispatch(testActions.setMediaPermission(permissionStatus.state));
      });

    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
    } else {
      if (recorder.state === "inactive") return;
      //stop capturing request
      const track = localStream.getTracks()[0];
      track.stop();
      //stop recording feature
      recorder.stop();
    }

    // Obtain the audio blob when ready.
    const handleData = (e) => {
      if (e.data.size > 0) {
        setChunks([e.data]);
      }
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  useEffect(() => {
    //convert returned blob into base64data
    if (chunks.length === 0) return;
    const blob = new Blob(chunks, {
      type: "audio/wav",
    });

    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      //remove unwanted tags from base64 data
      const base64BinaryData = base64data.substr(base64data.indexOf(",") + 1);

      //POST Request to api folder which sends audio data to GCP and returns transcribed text
      axios
        .post("api/SpeechToText", { audioBytes: base64BinaryData })
        .then((res) => {
          dispatch(testActions.setTranscript(res.data));
          dispatch(testActions.setIsTranscriptReceived(true));
          resetState();
        })
        .catch((err) => {
          dispatch(testActions.setIsTranscriptError(true));
          dispatch(testActions.setIsTranscriptReceived(false));
          resetState();
        });
    };
  }, [chunks]);
};

export default useRecorder;
