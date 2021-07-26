import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId;

    console.log(userId);
    const uri =
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority";
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

    // const client = await MongoClient.connect(
    //   "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority",
    //   { useUnifiedTopology: true },
    // );
    // const db = await client.db();
    // const userCollection = db.collection("userCollection");
    // const users = await userCollection.find({ localId: userId }).toArray();
    // client.close();

    // if (users.length > 0) {
    //   res.status(200).json({ message: "user exists" });
    // } else {
    //   res.status(204).json({ message: "user doesn't exist" });
    // }
  }
};

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@speech-therapy-app.mb1pc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
