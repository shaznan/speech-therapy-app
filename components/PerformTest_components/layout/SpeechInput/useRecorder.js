import { useEffect, useState } from "react";
import axios from "axios";

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
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

    // Obtain the audio when ready.
    const handleData = (e) => {
      console.log(e.data);
      setAudioURL(URL.createObjectURL(e.data));
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
    //convert blob into base 64
    const blob = new Blob(chunks, {
      type: "audio/mp3",
    });

    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      const convertedData = base64data.substr(base64data.indexOf(",") + 1);
      const data = convertedData; //removes non base64 characters (data type proprty)
      console.log(`"${convertedData}"`);
      console.log(blob);

      //POST Request to Api
      axios
        .post("api/SpeechToText", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, [chunks]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return [audioURL, isRecording, startRecording, stopRecording];
};

export default useRecorder;

// axios
// .post("/api/SpeechToText", base64data)
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// (async () => {
//     const rawResponse = await fetch("/api/SpeechToText", {
//       method: "POST",
//       headers: {
//         // 'Accept': 'application/json',
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(base64data),
//     });
//     const content = await rawResponse.json();

//     console.log(content);
//   })();
