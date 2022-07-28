import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Completed(){
    return(
        <div className='container mt-3'>
        <h1>Completed Projects</h1>
          <Carousel>
                <div>
                    <img src="./img/slider (1).jpg" />
                    <p className="legend">Hall Decor</p>
                </div>
                <div>
                    <img src="./img/slider (2).jpg" />
                    <p className="legend">Urban Modern Interior</p>
                </div>
                <div>
                    <img src="./img/slider (3).jpg" />
                    <p className="legend">Bohemian Interior</p>
                </div>
                <div>
                    <img src="./img/slider (4).jpg" />
                    <p className="legend">Kitchen Decor</p>
                </div>
            </Carousel>
           
        </div>
        
         
    )
}
export default Completed;