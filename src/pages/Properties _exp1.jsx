import { useState } from "react";
import API from "../api/api";

export default function Properties() {

  const [data, setData] = useState([]);
  const [responseTime, setResponseTime] = useState(null);
  const [source, setSource] = useState("");

  // -----------------------------------
  // STATIC JSON API
  // -----------------------------------
  const fetchStaticProperties = async () => {
    try {

      const start = performance.now();

      const res = await API.get("api/static/properties");

      const end = performance.now();

      setResponseTime((end - start).toFixed(2));

      setData(res.data);

      setSource("Static JSON API");

      console.log(
        "STATIC JSON RESPONSE TIME:",
        (end - start).toFixed(2),
        "ms"
      );

    } catch (err) {

      console.log(err);

    }
  };

  // -----------------------------------
  // DATABASE API
  // -----------------------------------
  const fetchDatabaseProperties = async () => {
    console.log("Database properties API was hit");

    try {

      const start = performance.now();

      const res = await API.get("api/db/properties");

      const end = performance.now();

      setResponseTime((end - start).toFixed(2));

      setData(res.data);

      setSource("MongoDB API");

      console.log(
        "DATABASE RESPONSE TIME:",
        (end - start).toFixed(2),
        "ms"
      );

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Properties Experiment</h1>

      {/* ---------------------------- */}
      {/* CONTROL BUTTONS */}
      {/* ---------------------------- */}

      <button onClick={fetchStaticProperties}>
        Load Static JSON
      </button>

      <button
        onClick={fetchDatabaseProperties}
        style={{ marginLeft: "10px" }}
      >
        Load MongoDB Data
      </button>

      {/* ---------------------------- */}
      {/* EXPERIMENT INFO */}
      {/* ---------------------------- */}

      <div style={{ marginTop: "20px" }}>

        <h3>
          Data Source: {source}
        </h3>

        <h3>
          Response Time: {responseTime} ms
        </h3>

        <h3>
          Total Properties: {data.length}
        </h3>

      </div>

      {/* ---------------------------- */}
      {/* PROPERTY LIST */}
      {/* ---------------------------- */}

      <div style={{ marginTop: "20px" }}>

        {data.map((item, i) => (

          <div 
            key={i}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}
          >

            <h2>{item.title}</h2>

            <p>
              Price: {item.price}
            </p>

            <p>
              Location: {item.location}
            </p>

            <p>
              Area: {item.area}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}