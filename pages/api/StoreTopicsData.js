const axios = require("axios");
import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const listOfItems = req.body;

    const data = {
      itemName: "carmanufacturers",
      list: listOfItems,
    }; //TODO: //this is the object that comes in from the front end post http request
    console.log(data);

    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/TopicsDataSet?retryWrites=true&w=majority"
    ); //simply connecting to the database

    const db = client.db(); //generating a database

    const topicsCollection = db.collection("Items related to topic"); //creating a database collection of documents

    const result = await topicsCollection.insertOne(data); //inserting a document query to the database, which is an object basically
    console.log(result);

    client.close(); //closing connection with the backend

    res.status(200).json({ message: "ok" });
  }
};
