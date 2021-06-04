import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

const useRecorder = () => {
  // const [audioURL, setAudioURL] = useState("");
  // const [isRecording, setIsRecording] = useState(false);
  const dispatch = useDispatch();
  const isRecording = useSelector((state) => state.performtest.isRecording);

  const [chunks, setChunks] = useState([]);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    //get access to browser mic
    async function requestRecorder() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      return new MediaRecorder(stream);
    }

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
      recorder.stop();
    }

    // Obtain the audio blob when ready.
    const handleData = (e) => {
      console.log(e.data);
      if (e.data.size > 0) {
        setChunks([e.data]);
      }

      //   download();
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  //convert returned blob into base64data
  useEffect(() => {
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

      //POST Request to Api folder
      axios
        .post("api/SpeechToText", { audioBytes: base64BinaryData })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, [chunks, isRecording]);

  const startRecording = () => {
    // setIsRecording(true);
    dispatch(testActions.setIsRecording());
  };

  const stopRecording = () => {
    // setIsRecording(false);
    dispatch(testActions.setIsRecording());
  };

  return [isRecording, startRecording, stopRecording];
};

export default useRecorder;
