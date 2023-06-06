import React from "react";
import {data} from "../Data";

function Hero(){
    return (
        <div id="hero">
            <div className="container">
             <div className="hero">
              <h1>Вкусные рецепты</h1>
                {
                   data.map(el=>(
                      <div>
                          <h1>{el.name}</h1>
                          {
                              el.ingredients.map(ingredients=>(
                                  <h3>{ingredients.name}</h3>
                              ))
                          }
                          <h2>Инструкция по приготовлению</h2>
                          {
                              <p>{el.steps}</p>
                          }
                      </div>
                   ))
               }

             </div>
            </div>
        </div>
    )
}

export default Hero;