import React from 'react';
import './head.css'

const head = () => {
  return(
    <div className='main'>
				<div className='head'>
					<h1>SONGS MASTHI</h1>
				</div>
        
        
        <div class="navbar">
        <div class="dropdown">
            <button class="dropbtn">MENU
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">TOLLYWOOD</a>
              <a href="#">BOLLYWOOD</a>
            </div>
          
          </div>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#contactus">CONTACT US</a>
          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
          </div>

          
        </div>
    </div>

    )

}
export default head;