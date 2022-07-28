import React from 'react';
import HoverImage from "react-hover-image";




const Home = () => {
  return (
    <div className='row mt-5'>
      
      <div className='col-lg-3'>
      <h3 className='text-left'>Modern Ideas </h3>
        <h5 className='text-left'><n/>For home using Hover effects</h5>
        <br/><br/>
        <p className='text-left'> Lorem ipsum is a placeholder text commonly used to demonstrate the
             visual form of a document or a typeface without relying on meaningful content. 
             which allows designers to consider the form of a webpage or publica
             </p>

             <button type="button" className="btn-dark btn-left btn btn-xl text-uppercase  ">Read More</button>   
    </div>
    
    <div className='col-lg-3'>
      <h2>Bedroom</h2>
      <HoverImage src="./img/bed.svg"  className='img-thumbnail ' hoverSrc="./img/design (1).jpg" />
    </div>
    <div className='col-lg-3'>
      <h2>Kitchen</h2>
      <HoverImage src="./img/kitchen.svg"  className='img-thumbnail' hoverSrc="./img/design (2).jpg" />
    </div>
    
    <div className='col-lg-3'>
      <h2>Light<p/></h2>
      <HoverImage src="./img/window.svg"  className='img-thumbnail' hoverSrc="./img/design (3).jpg" />
    </div>
    
    
    <div className='row mt-3'>
    <div className='col-lg-3'>
      <h2>Windows</h2>
      <HoverImage src="./img/window.svg"  className='img-thumbnail ' hoverSrc="./img/design (1).jpg" />
    </div>  

    <div className='col-lg-3'>
      <h2>Bathrooms</h2>
      <HoverImage src="./img/bath.svg"  className='img-thumbnail ' hoverSrc="./img/design (2).jpg" />
    </div>  

    <div className='col-lg-3'>
      <h2>Decoration</h2>
      <HoverImage src="./img/decor.svg"  className='img-thumbnail ' hoverSrc="./img/design (3).jpg" />
    </div>  

    <div className='col-lg-3'>
      <h2>Fireplace</h2>
      <HoverImage src="./img/fireplace.svg"  className='img-thumbnail ' hoverSrc="./img/design (1).jpg" />
    </div> 
    </div> 

    
    </div>
  )
}

export default Home;