import React, { useState, useEffect } from "react";
import HttpClient from "./HttpClient";
// import { AiOutlineHeart } from "react-icons/ai";
import Date from "./Date";

const Main = (props) => {
  const [apod, setApod] = useState({});

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h2>NASA Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header style={{ padding: "0px 0px 10px 0px" }}>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="NASA APOD" width="800" height="auto"/>
          <p style={{ fontSize: "22px" }}>{apod.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <hr />
            {/* {JSON.stringify(apod, null, 2)} */}
          </pre>
        </article>
      )}
    </div>
  );
};

export default Main;
