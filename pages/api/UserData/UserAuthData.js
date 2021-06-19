import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const userCollection = db.collection("userCollection");
    const result = await userCollection.insertOne(data);
    console.log(result);

    client.close(); //closing connection with the backend
    res.status(200).json({ message: "Successfully Inserted!" });
  }
};
