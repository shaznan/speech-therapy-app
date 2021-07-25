import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId;
    // console.log(userId);
    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority",
    );
    const db = client.db();
    const userCollection = db.collection("userCollection");
    const users = await userCollection.find({ localId: userId }).toArray();
    client.close();

    console.log(users);
    if (users.length > 0) {
      res.status(200).json({ message: "user exists" });
    } else {
      res.status(204).json({ message: "user doesn't exist" });
    }
  }
};
