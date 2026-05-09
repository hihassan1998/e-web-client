import { useEffect, useState } from "react";
import API from "../api/api";

export default function Properties() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/business/investments");
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Properties</h1>

      {data.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}