import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import useAlphabetValidator from "../../DataValidation/Alphabetical_letters/useAlphabetValidator";

const useRecorder = () => {
  const isRecording = useSelector((state) => state.performtest.isRecording);
  const [chunks, setChunks] = useState([]);
  const [recorder, setRecorder] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const dispatch = useDispatch();
  const [wordsMatch, wordsUnRelated, accuracyRate] = useAlphabetValidator();

  console.log(wordsMatch, wordsUnRelated, accuracyRate);

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
        // console.log(permissionStatus.state);
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
          // console.log(res.data);
          dispatch(testActions.setTranscript(res.data));
          dispatch(testActions.setIsAnalyzing(false));
          dispatch(testActions.setResponseReceived(true));
          //Store validated transcript after filtering data
          //FIXME: remove logic here work with set response received
          // call useAlphabet validaor in index.js
          //if accuracy rate is > 0 then dispatch action
          dispatch(
            testActions.setWordsCount({
              wordsMatch: wordsMatch,
              wordsUnRelated: wordsUnRelated,
              accuracyRate: accuracyRate,
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, [chunks, isRecording, wordsUnRelated, wordsUnRelated, accuracyRate]);
};

export default useRecorder;
