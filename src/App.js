import React from 'react';
import Solutions from './components/solutions';

import logo from './assets/img/artys.png'
import blog from './assets/img/blog_01.jpg'


import './App.css';
import Home from './components/home';
import Completed from './components/completed';


function App() {
 
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={logo} ></img></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#Homes">Homes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#About us">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#How it works">How It works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#Blog">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#Contact us">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
        
    


  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-heading text-uppercase">BRINGING LIFE!</div>
        <div className="intro-lead-in">TO INTERIOR</div>
        <div className='paragraph'><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
           graphic or web designs. The passage is attributed to an unknown and visual form of a document or a typeface without relying on meaningful content.</p></div>
        <a className="btn btn btn-xl text-uppercase js-scroll-trigger" href="#services">MORE INFO</a>
      </div>
    </div>
  </header>


  <div className='col-lg-12'>
    <Solutions/>
    </div>


  <div className='col-lg-12'>
    <Home/>
    </div>


  <div className='col-lg-12'>
    <Completed/>
    </div>
  

        <img className='img-responsive' src="./img/booklet.png"></img>
        <img className='img-responsive' src="./img/count.png"></img>
    
  
  <section className="page-section new" id="services">
    <h1>Recent Articles</h1>

  <div class="row">
			<div class="col-lg-12">
				<h3 class="text-center ">Our products</h3>
				
			</div> 
				<div class="col-lg-4"><img src={blog} class="img-fluid"/>
        <small> December 9.2019 |</small>
        <h5><b>Most Significant Architectural Projects of the year 2019</b></h5>
        <p className="text-muted">Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
       </div>
       <div class="col-lg-4"><img src={blog} class="img-fluid"/>
       <small> December 9.2019 |</small>
       <h5><b>Most Significant Architectural Projects of the year 2019</b></h5>
        <p className="text-muted">Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
       </div>
       <div class="col-lg-4"><img src={blog} class="img-fluid"/>
       <small> December 9.2019| </small>
       <h5><b>Most Significant Architectural Projects of the year 2019</b></h5>
        <p className="text-muted">Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
       </div>
		</div>
  
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      
      <div className="row">
			<div className="col-lg-12">
				<h3 className="text-center">Dedicated designers</h3>
				
			</div> 
				<div className="col-lg-3"><img src="./img/1.jpg" className="img-fluid"/><h6>Vasistha</h6><small>Photographer</small></div>
				<div className="col-lg-3"><img src="./img/2.jpg" class="img-fluid"/><h6>Vinish</h6><small>Designer</small></div>
				<div className="col-lg-3"><img src="./img/3.jpg" class="img-fluid"/><h6>Vinyas</h6><small>Architect</small></div>
				<div className="col-lg-3"><img src="./img/4.jpg" class="img-fluid"/><h6>Vindya</h6><small>Photographer</small></div>
		</div>
     
     </div>
   </section>

  
   <section className="page-section " id="contact">
      <div className="container">

        <section className="newsletter">
              <div className="container">
                <div className="row">
                <div className="col-sm-12">
                  <div className="content">
                    <h2>Subscribe For Members<h5>To Receive Latest News And Special Offers</h5></h2>
                  <div className="input-group">
                        <input type="email" className="form-control" placeholder="Your Email" />
                        <span className="input-group-btn">
                        <button className="btn" type="submit">Subscribe</button>
                        </span>
                     </div>
                 </div>
                 <div className="container p-4">
                    <div className='row'>
                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                     <h5 class="text-white">Modular Kitchen</h5>
  
                                  <ul className="list-unstyled mb-0">
                                    <li>
                                      <a href="#!" className="text-white">Modular Kitchen in Bengaluru</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Modular Kitchen in Visahapatnam</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Modular Kitchen in Chennai</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Modular Kitchen in Hyderabad</a>
                                    </li>
                                  </ul>

                    </div>

                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                     <h5 class="text-white">Wardrobe Design</h5>
  
                                  <ul className="list-unstyled mb-0">
                                    <li>
                                      <a href="#!" className="text-white">Wardrobe Design in Bengaluru</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Wardrobe Design in Visahapatnam</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Wardrobe Design in Chennai</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Wardrobe Design in Hyderabad</a>
                                    </li>
                                  </ul>

                    </div>

                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                     <h5 class="text-white">Interior Designers</h5>
  
                                  <ul className="list-unstyled mb-0">
                                    <li>
                                      <a href="#!" className="text-white">Interior Designers in Bengaluru</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Interior Designers in Visahapatnam</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Interior Designers in Chennai</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">Interior Designers in Hyderabad</a>
                                    </li>
                                  </ul>

                    </div>

                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                     <h5 class="text-white">ARTYSS</h5>
  
                                  <ul className="list-unstyled mb-0">
                                    <li>
                                      <a href="#!" className="text-white">Support</a>
                                    </li>
                                    <li>
                                      <a href="#!" className="text-white">About Us</a>
                                    </li>
                                  </ul>

                    </div>

                  </div>
                </div>
             </div>
        </div>
      </div>
      </section>    
    </div>

  </section>

  
  <footer className="footer">
    <div className="container ">
      <div className="d-flex flex-wrap align-items-center ">
        <div className='col-md-4'>
          <img src={logo}></img>
        </div>
        <div className="col-md-4">
          <span className="text-white">&copy; 2021 Artyss Inc.All Rights Reserved</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
