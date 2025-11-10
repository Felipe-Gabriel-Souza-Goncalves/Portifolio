import { useState, useEffect } from "react";

function FetchProjetos(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const response = await fetch("/data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        return data;
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

}

export default FetchProjetos