import React, { useState, useEffect } from "react";

export default function Photo() {
  const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
  const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `${nasaEndpoint}planetary/apod?api_key=${nasaApiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  console.log(photoData);

  if (!photoData) return <div>No data available for this date.</div>;

  return (
    <div className="photo-container">
      <h2>NASA Astronomy Picture of the Day</h2>
      <div>
        {photoData.title} - <i>{photoData.date}</i>
      </div>
      <img src={photoData.url} />
      <p>{photoData.explanation}</p>
      <hr />
    </div>
  );
}
