// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const speech = require("@google-cloud/speech");
// const fs = require("fs");
//
// async function handler(req, res) {
//   if (req.method === "apple") {
//     const audioFile = req.body;
//     //google cloud platform
//     const client = new speech.SpeechClient();
//     const audioBytes = audioFile;

//     const audio = {
//       content: audioBytes,
//     };

//     const config = {
//       encoding: "LINEAR16",
//       sampleRateHertz: 16000,
//       languageCode: "en-US",
//     };

//     const request = {
//       audio: audio,
//       config: config,
//     };

//     const [response] = await client.recognize(request);
//     const transcription = response.results
//       .map((result) => {
//         result.alternatives[0].transcript;
//       })
//       .join("/n");
//     console.log(`transcription: ${transcription}`);

//     res.status(201).json({ message: "Meetup inserted!" }); //response if the process was successful
//   }
// }

// handler.catch(console.error);

// async function main(){

// }

const speech = require("@google-cloud/speech");

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const data = req.body;
      const client = new speech.SpeechClient();
      const audioBytes = data;

      const audio = {
        content: audioBytes,
      };

      const config = {
        encoding: "MP3",
        // sampleRateHertz: 16000,
        languageCode: "en-US",
      };

      const request = {
        audio: audio,
        config: config,
      };
      const [response] = await client.recognize(request);
      const transcription = response.results
        .map((result) => {
          result.alternatives[0].transcript;
        })
        .join("/n");
      console.log(`transcription: ${transcription}`);

      res.status(200).json({ message: "it works" });
    } catch (error) {
      console.log(error);
    }
  }
};
