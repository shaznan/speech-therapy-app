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

    // axios post request to GCP
    axios
      .post(
        "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyBotY11MdG9sfY2osCD2Eb-FtxaCYP1l2c",
        requestBody
      )
      .then((res) => {
        console.log(res.data.results[0].alternatives[0].transcript);
      })
      .catch((err) => {
        console.error(err);
      });

    res.status(200).json({ message: "Success!" });
  }
};
