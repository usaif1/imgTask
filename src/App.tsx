import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

import { Response, SingleData } from "./types";

const App: React.FC = () => {
  const [data, setData] = useState<string[]>([""]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: Response = await axios.get("https://finalspaceapi.com/api/v0/character/");
    const imgArr = response.data.map((data: SingleData) => {
      return data.img_url;
    });
    setData(imgArr);
  };

  return (
    <div className="App" style={{ display: "flex", justifyContent: "start", flexWrap: "wrap" }}>
      {data.map((img: any, index: any) => {
        return (
          <img
            src={img}
            alt="sada"
            key={index}
            style={{ height: "10rem", width: "10rem", marginLeft: "1rem", marginTop: "1rem" }}
          />
        );
      })}
    </div>
  );
};

export default App;
