// This javascript file helps us to get information from the spoonacular API

import { useEffect, useState } from "react";
import axios from "axios";

function useAPI(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      }).finally(() => {
        setLoading(false);
      });
  }, [url]);
  
return { data, loading };

}

export default useAPI;