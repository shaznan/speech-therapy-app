import { MongoClient } from "mongodb";

//get users with highest scores from db
export default async (req, res) => {
  if (req.method === "GET") {
    const dataLimit = +req.query.limit;
    const client = await MongoClient.connect(
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const scoreCollection = db.collection("performTestState");
    const scores = await scoreCollection
      .find()
      .sort({ highScore: -1 })
      .limit(dataLimit)
      .toArray();

    const scoresUuid = scores.map((item) => {
      return item.uuid;
    });

    const userCollection = db.collection("userCollection");
    const user = await userCollection
      .find({ uuid: { $in: scoresUuid } })
      .toArray();

    const combinetestStateWithUser = (user, scores) =>
      user.map((itm) => ({
        ...scores.find((item) => item.uuid === itm.uuid && item),
        ...itm,
      }));

    const combinedData = combinetestStateWithUser(user, scores);
    const sortCombinedData = combinedData.sort((a, b) => {
      return b.highScore - a.highScore;
    });

    client.close();
    res.status(200).json({ leaderBoard: sortCombinedData });
  }
};
