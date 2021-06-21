import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "POST") {
    //   const data = req.body;
    const data = req.body.user;
    const {
      email,
      localId,
      nickName,
      WordsCount,
      averageScore,
      scoreAvgeCriteria,
      highScore,
      changeOverPrevScore,
    } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority"
    );

    const db = client.db();
    const userCollection = db.collection("userCollection");
    const user = await userCollection.find({ localId: localId }).toArray();

    const scoreUuid = user[0].uuid;

    const performTestCollection = db.collection("performTestState");
    console.log(data);
    console.log(scoreAvgeCriteria);

    const updateScore = await performTestCollection.replaceOne(
      { uuid: scoreUuid },
      {
        uuid: scoreUuid, //mongodb removes this feild if not mentioned
        WordsCount: WordsCount,
        averageScore: averageScore,
        scoreAvgeCriteria: scoreAvgeCriteria,
        highScore: highScore,
        changeOverPrevScore: changeOverPrevScore,
      }
    );

    //   const { email, localId, nickName } = data;
    //   const userResult = await userCollection.insertOne({
    //     email,
    //     localId,
    //     nickName,
    //     uuid: relationShipId,
    //   });

    client.close(); //closing connection with the backend
    res.status(200).json({ message: "ok" });
  }
};
