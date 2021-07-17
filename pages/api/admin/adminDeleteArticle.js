import { MongoClient, ObjectId } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const listOfArticleId = data.articleData.articles.map(
      (article) => article.articleId,
    );
    const userId = data.articleData.userId;
    console.log(listOfArticleId, userId);

    const client = await MongoClient.connect(
      "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true },
    );
    const db = client.db();

    // //Is user Admin?
    const userCollection = db.collection("userCollection");
    const users = await userCollection.find({ localId: userId }).toArray();

    //if user admin then delete article
    if (users[0].userRole === "Admin") {
      const client = await MongoClient.connect(
        "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/Article?retryWrites=true&w=majority",
        { useUnifiedTopology: true, useNewUrlParser: true },
      );
      const db = client.db();
      const ArticleCollection = db.collection("Articles");
      const deleteItem = await ArticleCollection.deleteMany({
        articleId: { $in: listOfArticleId },
      });
      if (deleteItem.deletedCount > 0) {
        res.status(200).json("message: item deleted");
      } else {
        res.status(404).json("There was some problem deleting the article");
      }
    }

    client.close();
  }
};
