import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId;

    console.log(userId);
    const uri =
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    client.connect(async () => {
      const collection = client.db().collection("userCollection");
      console.log(collection);
      const users = await collection
        .find({ localId: userId })
        .toArray()
        .catch((err) =>
          res.status(500).json({ message: "Could not connect to data base" }),
        );
      console.log(users);
      client.close();

      console.log("hey");

      if (users.length > 0) {
        console.log("it works");
        res.status(200).json({ message: "user exists" });
      } else {
        res.status(204).json({ message: "user doesn't exist" });
      }

      // if (!Array.isArray(users)) {
      //   console.log("false");
      // }
      // perform actions on the collection object
    });
  }
};
