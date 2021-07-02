import { MongoClient, ObjectId } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data.id);
    // const objectId = `objectId("${data.id}")`;
    const objectId = ObjectId(data.id);
    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/Article?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    const db = client.db();
    const ArticleCollection = db.collection("Articles");
    const deleteItem = await ArticleCollection.deleteOne({ _id: objectId });
    client.close();
    res.status(200).json("data inserted!");
  }
};
