import React from 'react';
import logo from '../images/logo.png'; 
import searchIcon from '../images/Search.png'
function Nav() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='Company Logo'/>
      </div>
      <div className='searchBar'>
       <input className='searchbox'type='text' placeholder='Search a album of your choice'/>
       <button className='searchBtn'><img className='searchIcon'src={searchIcon}alt=''/></button>
      </div>
      <div className='feedback'>
      <button className='feed'>Give Feedback</button>
      </div>   
    </div>
  );
}

export default Nav;
