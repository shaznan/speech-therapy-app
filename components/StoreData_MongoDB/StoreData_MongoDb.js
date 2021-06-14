import React, { useEffect, useState } from "react";
import axios from "axios";

function StoreData_MongoDb() {
  const [isButtonChecked, setIsButtonChecked] = useState(false);
  const [gistData, setGistData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/pcgeek86/78f4cad29dd16961ceeeee654127a0db/raw/b9a19ee5c6fb283eaf2f863a18ba9176359abd47/Car%2520Manufacturers.json" //enter gist url //TODO:
      )
      .then((res) => {
        console.log(res);
        setGistData(res.data);
        // split("\n")
        console.log(res);
        // console.log(res);
      })
      .catch((err) => console.error(err));

    //
  }, []);

  useEffect(() => {
    if (!isButtonChecked) return;
    if (gistData === null) return;
    console.log("reached post point");
    axios
      .post("/api/StoreTopicsData", { carmanufacturers: gistData }) //TODO:
      .then((res) => {
        console.log(res);
        console.log(gistData);
      })
      .catch((err) => console.log(err));
  }, [isButtonChecked, gistData]);

  const onClickHandler = () => {
    setIsButtonChecked(true);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Send Data</button>
    </div>
  );
}

export default StoreData_MongoDb;
