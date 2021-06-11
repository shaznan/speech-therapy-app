const axios = require("axios");

export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const audioBytes = data.audioBytes;

    const requestBody = {
      audio: {
        content: audioBytes,
      },
      config: {
        enableAutomaticPunctuation: false,
        encoding: "WEBM_OPUS",
        languageCode: "en-US",
        model: "default",
      },
    };

    ///////// axios post request to GCP

    // const getTranscript = async () => {
    //   try {
    //     let response = await axios.post(
    //       "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyBotY11MdG9sfY2osCD2Eb-FtxaCYP1l2c",
    //       requestBody
    //     );
    //     return await response;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // getTranscript();

    // const responseData = await getTranscript();
    // const transcript = responseData.data.results[0].alternatives[0].transcript;

    // console.log(transcript);
    res.status(200).json(transcript);
  }
};
