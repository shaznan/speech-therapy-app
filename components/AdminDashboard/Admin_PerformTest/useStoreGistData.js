import React, { useState } from "react";
import axios from "axios";

function useStoreGistData(data) {
  const [resStatus, setResStatus] = useState(null);
  const [loading, setLoading] = useState(null);

  const storeGistData = (data) => {
    const { gistUrl, catergoryName, localId } = data;
    setLoading("loading");
    axios
      .get(gistUrl)
      .then((res) => {
        const gistData = res.data;
        axios
          .post("/api/StoreTopicsData", { gistData, catergoryName, localId })
          .then((res) => {
            setResStatus("success");
            setLoading("success");
          })
          .catch((err) => {
            setResStatus("Failed to insert data");
            setLoading("success");
          });
      })
      .catch((err) => {
        setResStatus("Could not fetch data, try again!");
        setLoading("success");
      });
  };

  return [resStatus, loading, storeGistData];
}

export default useStoreGistData;
