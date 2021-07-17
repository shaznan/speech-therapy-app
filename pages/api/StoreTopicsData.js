const axios = require("axios");
import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    // const listOfItems = req.body;
    const listOfItems = req.body.gistData;
    const catergoryName = req.body.catergoryName;
    const userId = req.body.localId;
    const data = {
      itemName: catergoryName.toLowerCase(),
      [catergoryName]: {
        list: listOfItems.split("\n"),
      },
    };

    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true },
    );
    const db = client.db();

    // //Is user Admin?
    const userCollection = db.collection("userCollection");
    const users = await userCollection.find({ localId: userId }).toArray();

    //if user admin then store topics data
    if (users[0].userRole === "Admin") {
      const client = await MongoClient.connect(
        "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/TopicsDataSet?retryWrites=true&w=majority",
      );

      const db = client.db();

      const topicsCollection = db.collection("Items related to topic");

      const result = await topicsCollection.insertOne(data);

      if (result.insertedCount > 0) {
        res.status(200).json({ message: "ok" });
      } else {
        res.status(404).end();
      }
    }
    client.close();
  }
};
