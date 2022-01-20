import React from "react"; 

const Navbar = (props) => {
    return (
        <div className="navbar"> 
            <div>
                <h6 className="nav-logo">
                    Spacestagram 
                </h6>
            </div>
            <div className="nav-links">
                <a href="https://github.com/user01010011" target="_blank" rel="noreferrer" className="github">Github</a>
                <a href="https://medium.com/@isabella.y" target="_blank" rel="noreferrer" className="blog">Blog</a>
            </div>
        </div>
    )
}

export default Navbar;