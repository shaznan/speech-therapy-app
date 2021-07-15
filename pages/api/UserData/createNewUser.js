import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority",
    );

    const relationShipId = uuidv4();

    const db = client.db();
    const userCollection = db.collection("userCollection");
    const { email, localId, nickName, checkout_id, userRole } = data;
    const userResult = await userCollection.insertOne({
      email,
      localId,
      nickName,
      uuid: relationShipId,
      checkout_id,
      userRole,
    });

    const performTestState = db.collection("performTestState");
    const {
      averageScore,
      scoreAvgeCriteria,
      highScorem,
      changeOverPrevScore,
      WordsCount,
    } = data;
    const testResult = await performTestState.insertOne({
      uuid: relationShipId,
      averageScore,
      WordsCount,
      scoreAvgeCriteria,
      highScorem,
      changeOverPrevScore,
    });

    client.close(); //closing connection with the backend
    res.status(200).json({ message: "Successfully Inserted!" });
  }
};
