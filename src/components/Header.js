import React from "react";
import First from "../img/header.svg"
function Header(){
    return(
        <div id="header">
            <div className="container">
             <div className="header">
                 <img src={First} alt=""/>
                 <div className="header--nav">
                     <a href="#">Home</a>
                     <a href="#">Recipes</a>
                     <a href="#">Meat</a>
                     <a href="#">About</a>
                     <a href="#">Blog</a>
                     <a href="#">Support</a>
                 </div>
                     <div className="header--btn">
                     <button className="header--btn__btn1">Sign in</button>
                     <button className="header--btn__btn2">Request demo</button>
                     </div>
             </div>
            </div>
        </div>
    )
}

export default Header;