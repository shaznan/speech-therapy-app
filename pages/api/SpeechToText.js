// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const speech = require("@google-cloud/speech");
const fs = require("fs");
//
// const sampleAudio = require("../../assets/sample.wav");

const speech = require("@google-cloud/speech").v1p1beta1;

const axios = require("axios");

export default async (req, res) => {
  if (req.method === "POST") {
    // console.log(req.body);
    const data = req.body;
    // const client = new speech.SpeechClient();
    const audioBytes = data.audioBytes;
    // console.log(audioBytes);

    const requestBody = {
      audio: {
        content: audioBytes,
      },
      config: {
        enableAutomaticPunctuation: true,
        encoding: "WEBM_OPUS",
        languageCode: "en-US",
        model: "default",
        // audioChannelCount: 2,
      },
    };

    //axios post request
    axios
      .post(
        "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyBotY11MdG9sfY2osCD2Eb-FtxaCYP1l2c",
        requestBody
      )
      .then((res) => {
        // console.log(res);
        const transcription = res.data.results;
        console.log(res.data.results[0].alternatives[0].transcript);
        // transcription
        //   .map((result) => {
        //     result.alternatives[0].transcript;
        //   })
        //   .join("/n");
        // console.log(transcription);

        // res.status(200).json({ message: "hit the server" });
      })
      .catch((err) => {
        console.error(err);
      });

    ///uncomment

    // const audio = {
    //   content:

    //   // content: fs.readFileSync(sampleAudio).toString("base64"),

    //   // content: sampleAudio.toString("base64"),
    //   // content: "gs://cloud-samples-data/speech/brooklyn_bridge.raw",
    // };

    // const config = {
    //   encoding: "MP3",
    //   sampleRateHertz: 16000,
    //   languageCode: "en-US",
    //   audio_channel_count: 2,
    //   // enableWordTimeOffsets: false,
    // };

    // const request = {
    //   audio: audio,
    //   config: config,
    // };
    //   const [response] = await client.recognize(request);
    //   const transcription = response.results
    //     .map((result) => {
    //       result.alternatives[0].transcript;
    //     })
    //     .join("/n");
    //   console.log(`transcription: ${transcription}`);

    res.status(200).json({ message: "it works" });
    // } catch (error) {
    //   console.log(error);
    // }
  }
};
