import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    const topic = req.body;
    // console.log(topic);
    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const userCollection = db.collection("userCollection");
    const users = await userCollection
      .find({ localId: "GXLpq4VFDrMwyj2q0TQ1YXPvssA3" })
      .toArray();

    // console.log(users[0].uuid);
    const uuid = users[0].uuid;

    const performTestState = db.collection("performTestState");
    const testState = await performTestState.find({ uuid: uuid }).toArray();
    console.log(testState);

    client.close();

    res.status(200).json({ users, testState });
  }
};
//FIXME: GENERATE UUID
