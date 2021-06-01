import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [chunks, recordChunks] = useState([]);
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
        recordChunks([e.data]);
        // console.log(chunks);
      }

      //   download();
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  useEffect(() => {
    if (chunks.length === 0) return;
    const blob = new Blob(chunks, {
      type: "audio/mp3",
    });

    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      console.log(base64data);
    };
  }, [chunks]);

  //   var url = URL.createObjectURL(blob);
  //   console.log(`nigga: ${url}`);
  //     const download = () => {
  //   };

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    // download();
  };

  return [audioURL, isRecording, startRecording, stopRecording];
};

export default useRecorder;
