import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId;
    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority",
    );
    const db = client.db();
    const userCollection = db.collection("userCollection");
    const users = await userCollection.find({ localId: userId }).toArray();

    const uuid = users[0].uuid;

    const performTestState = db.collection("performTestState");
    const testState = await performTestState.find({ uuid: uuid }).toArray();

    client.close();
    const { email, localId, nickName, checkout_id } = users[0];
    const {
      WordsCount,
      averageScore,
      scoreAvgeCriteria,
      highScore,
      changeOverPrevScore,
    } = testState[0];

    res.status(200).json({
      email,
      localId,
      nickName,
      checkout_id,
      WordsCount,
      averageScore,
      scoreAvgeCriteria,
      highScore,
      changeOverPrevScore,
    });
  }
};
//FIXME: GENERATE UUID
