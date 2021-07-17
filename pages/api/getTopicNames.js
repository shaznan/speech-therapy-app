import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/TopicsDataSet?retryWrites=true&w=majority",
    );
    const db = client.db();
    const itemsCollection = db.collection("Items related to topic");
    const items = await itemsCollection.find().toArray();
    const topicCatergoryNames = items.map((item) => {
      return item.itemName;
    });
    // const removeQuotes = topic.replace(/['"]+/g, "");
    client.close();

    console.log(topicCatergoryNames);

    res.status(200).json(topicCatergoryNames);
  }
};
