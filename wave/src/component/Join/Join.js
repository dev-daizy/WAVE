import React, { useState } from 'react'
import "./Join.css";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import twitter from "../../images/twitterpng.png"
import instagram from "../../images/instapng.png"
import github from "../../images/githubpng.png"


let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}

const Join = () => {
    const [name, setname] = useState("");
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt="logoimg" />
        <h1>start chat</h1>
        <input
  onChange={(e) => setname(e.target.value)}
  placeholder='Enter your Name here'
  type="text"
  id='joinInput'
  className={name === '' ? 'error' : ''}
  onAnimationEnd={() => {
    setTimeout(() => {
      setname(''); // Reset the input value
    }, 1000);
  }}
/>
        <Link 
         onClick={(event) => !name ? (event.preventDefault(), event.target.classList.add('error')) : null}
         onAnimationEnd={() => {
            setTimeout(() => {
              setname(''); // Reset the input value
            }, 1000);
          }}
        to ="./chat" >
        <button onClick={sendUser} className='joinbtn'>LOGIN</button>
        </Link>

        <div className='followus'>
          {/* follow us banna hai  */}
          <h2>follow us</h2>
          <div className="icons">
    <Link to="https://twitter.com/dev_daizy" target='_blank'><img src={twitter} alt="x" /></Link>
    <Link to="https://github.com/dev-daizy" target='_blank'><img className='github' src={github} alt="github" /></Link>
    <Link to="https://instagram.com/dev_daizy" target='_blank'><img src={instagram} alt="insta" /></Link>
  </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Join
export { user }