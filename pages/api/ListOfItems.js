import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    const topic = req.query.topic;
    // console.log(topic);
    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/TopicsDataSet?retryWrites=true&w=majority"
    );
    const db = client.db();
    const itemsCollection = db.collection("Items related to topic");
    const items = await itemsCollection.find({ itemName: topic }).toArray();
    // const removeQuotes = topic.replace(/['"]+/g, "");
    client.close();

    res.status(200).json(items[0]);
  }
};
