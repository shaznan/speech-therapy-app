import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/Article?retryWrites=true&w=majority"
    );
    const db = client.db();
    const ArticleCollection = db.collection("Articles");
    const result = await ArticleCollection.insertOne(data);
    client.close();
    res.status(200).json("data inserted!");
  }
};
