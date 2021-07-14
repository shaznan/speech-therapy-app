import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/Article?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true },
    );
    const db = client.db();
    const ArticlesCollection = db.collection("Articles");
    const Articles = await ArticlesCollection.find({}).toArray();
    client.close();
    res.status(200).json(Articles);
  }
};
