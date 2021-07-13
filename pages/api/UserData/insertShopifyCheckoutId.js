import { MongoClient } from "mongodb";

//get topic list based on req query, from database
export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { userLocalId, checkoutId } = data;

    const uri =
      "mongodb+srv://shaznanfairoze:qmpGwieO89Yy1QNM@speech-therapy-app.mb1pc.mongodb.net/UserData?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    client.connect(async () => {
      const db = await client.db();
      const collection = db.collection("userCollection");

      const updateCheckoutId = await collection.updateOne(
        {
          localId: userLocalId,
        },
        {
          $set: { checkout_id: checkoutId },
        },
      );

      console.log(updateCheckoutId);
      // perform actions on the collection object
      client.close();
    });

    res.status(200).json({ message: "checkout_id updated!" });
  }
};
