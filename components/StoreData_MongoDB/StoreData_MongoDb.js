import React, { useEffect, useState } from "react";
import axios from "axios";

function StoreData_MongoDb() {
  const [isButtonChecked, setIsButtonChecked] = useState(false);
  const [gistData, setGistData] = useState(null);

  useEffect(() => {
    // if (!isButtonChecked) return;

    //get list of countries from gist
    // axios
    //   .get(
    //     "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
    //   )
    //   .then((res) => {
    //     setGistData(res.data.split("\n"));
    //     // console.log(gistData);
    //     // console.log(res);
    //   })
    //   .catch((err) => console.error(err));

    // get list of animals from gist
    axios
      .get(
        "https://gist.githubusercontent.com/atduskgreg/3cf8ef48cb0d29cf151bedad81553a54/raw/82f142562cf50b0f6fb8010f890b2f934093553e/animals.txt" //enter gist url //TODO:
      )
      .then((res) => {
        setGistData(res.data.split("\n"));
        // console.log(res);
      })
      .catch((err) => console.error(err));

    //
  }, []);
  //   const { countries, animals } = gistData;

  //   console.log(gistData);

  useEffect(() => {
    if (!isButtonChecked) return;
    if (gistData === null) return;
    axios
      .post("/api/StoreTopicsData", { "list of animals": gistData }) //TODO:
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
