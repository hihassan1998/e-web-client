import { useState } from "react";
import API from "../api/api";

export default function Properties() {

  const [data, setData] = useState([]);
  const [responseTime, setResponseTime] = useState(null);
  const [source, setSource] = useState("");

  // ---------------------------
  // SMALL DATASET
  // ---------------------------
  const fetchSmall = async () => {
    const start = performance.now();

    const res = await API.get("api/static/properties/small");

    const end = performance.now();

    setResponseTime((end - start).toFixed(2));
    setData(res.data);
    setSource("Small Dataset (10)");

  };

  // ---------------------------
  // MEDIUM DATASET
  // ---------------------------
  const fetchMedium = async () => {
    const start = performance.now();

    const res = await API.get("api/static/properties/medium");

    const end = performance.now();

    setResponseTime((end - start).toFixed(2));
    setData(res.data);
    setSource("Medium Dataset (100)");

  };

  // ---------------------------
  // LARGE DATASET
  // ---------------------------
  const fetchLarge = async () => {
    const start = performance.now();

    const res = await API.get("api/static/properties/large");

    const end = performance.now();

    setResponseTime((end - start).toFixed(2));
    setData(res.data);
    setSource("Large Dataset (1000)");

  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Experiment 3 - Rendering Performance</h1>

      {/* BUTTONS */}
      <button onClick={fetchSmall}>Small Dataset</button>
      <button onClick={fetchMedium} style={{ marginLeft: "10px" }}>
        Medium Dataset
      </button>
      <button onClick={fetchLarge} style={{ marginLeft: "10px" }}>
        Large Dataset
      </button>

      {/* INFO */}
      <div style={{ marginTop: "20px" }}>
        <h3>Dataset: {source}</h3>
        <h3>Response Time: {responseTime} ms</h3>
        <h3>Total Items: {data.length}</h3>
      </div>

      {/* LIST */}
      <div style={{ marginTop: "20px" }}>
        {data.map((item, i) => (
          <div key={i} style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.location}</p>
            <p>{item.area}</p>
          </div>
        ))}
      </div>

    </div>
  );
}