import React, { useState, useEffect } from "react";
import Date from "./Date";

export default function Main() {
  const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
  const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

  const [photoData, setPhotoData] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `${nasaEndpoint}planetary/apod?api_key=${nasaApiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  async function getPhoto(date) {
    const res = await fetch(
      `${nasaEndpoint}planetary/apod?api_key=${nasaApiKey}&date=${date}`
    );
    const data = await res.json();
    setPhotoData(data);
    console.log(data);
  }

  const changeDate = (e) => {
    e.preventDefault();
    let dateInput = e.target[0].value;
    setDate(dateInput);
    getPhoto(dateInput);
  };

  return (
    <div className="main-container">
      <Date changeDate={changeDate} />
      <h2>NASA Astronomy Picture of the Day</h2>
      <div className="photo-info">
        {photoData.title} <i>{photoData.date}</i>
        {photoData.media_type === "image" ? (
          <img className="image" src={photoData.url} alt={photoData.title} />
        ) : (
          <iframe
            className="iframe"
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        )}
        <p>{photoData.explanation}</p>
      </div>
      <hr />
    </div>
  );
}
