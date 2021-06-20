import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  //   if (req.method === "POST") {
  //   const data = req.body;
  console.log(req.body);
  // const client = await MongoClient.connect(
  //   "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority"
  // );

  // const db = client.db();
  // const userCollection = db.collection("userCollection");
  // const { email, localId, nickName } = data;
  // const userResult = await userCollection.insertOne({
  //   email,
  //   localId,
  //   nickName,
  //   uuid: relationShipId,
  // });

  // client.close(); //closing connection with the backend
  res.status(200).json({ message: "Successfully Inserted!" });
  //   }
};
