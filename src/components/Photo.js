import React, { useState, useEffect } from "react";
import HttpClient from "./HttpClient";
// import { AiOutlineHeart } from "react-icons/ai"; 
// import Date from "./Date";

const Photo = () => {
    const [apod, setApod] = useState({})
    useEffect(() => {
      HttpClient.getApod().then(apodData => {
        setApod(apodData.data)
      })
    }, [])
  
    return (
      <div style={{ maxWidth: 900, padding: 30 }}>
        <h1>NASA API</h1>
        <h2>Astronomy Picture of the Day</h2>
        {apod && (
          <article>
            <header>
              {apod.title} - <i>{apod.date}</i>
            </header>
            <img src={apod.url} alt="APOD" width="800" height="auto" />
            <p>{apod.explanation}</p>
            <pre
              style={{
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              <hr />
              {JSON.stringify(apod, null, 2)}
            </pre>
          </article>
        )}
      </div>
    )
}

export default Photo;


    // const [date, setDate] = useState(""); 
    // const [photoData, setPhotoData] = useState(); 
    // const [likes, setLikes] = useState();

    // useEffect(() => {
    //     fetchPhoto(); 
    // })

    // function fetchPhoto() {
    //     fetch(URL)
    //     .then(resp => resp.json())
        // .then(photos => {
        //     photos.data.forEach(photo => {
        //         let newPhoto = new Photo(photo, photo.attributes)
        //     })
        // })
    // }

    // return (
    //     <div className="photo-card" id="photo-card">
    //         <div className="photo-info" id="photo-info">
                {/* <h3 className="photo-title">${photoData.title}</h3>
                <p>Date: ${photoData.date}</p>
                <p>Description: ${photoData.description}</p>
                <button className="like-button" onClick={() => setLikes(likes + 1)}>❤️</button> */}
    //         </div>
    //     </div>
    // )