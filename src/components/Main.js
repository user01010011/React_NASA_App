import React from "react"; 
// import Photo from "./Photo";

const Main = (props) => {
    return (
        <div>
            <h3>Spacestagram</h3>
            <p>Image-sharing from the final frontier</p>
            <img style={{width: "640px", height:"640px", borderRadius:"40px"}} 
                src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" 
                className="App-photo" 
                alt="app-photo"
            />
        </div>
    )
}

export default Main;