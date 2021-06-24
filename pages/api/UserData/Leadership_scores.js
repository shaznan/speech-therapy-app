import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    // const userId = req.query.userId;
    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const userCollection = db.collection("performTestState");
    const users = await userCollection
      .find()
      .sort({ highScore: -1 })
      .limit(5)
      .toArray();
    console.log("new");
    console.log(users);
    client.close();
    res.status(200).json({ message: "ok!" });
  }
};
//FIXME: GENERATE UUID
