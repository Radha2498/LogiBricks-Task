import React from 'react'
import '../src/home.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function home() {
    
 
    return (
        <div>
             <img src= "https://www.integrityky.com/wp-content/uploads/2018/12/AdobeStock_199685378-1200x668.jpeg" height="700px"  width="1333px" />
        <p className="company">Logibricks technologies private limited</p>
        <img src="https://www.static-contents.youth4work.com/y4w/Images/CompColleges/3920017.png?v=20180810160941%27" class="logo"></img>
      
<Link classname="clickon" to="/Card" style={{ marginTop: "46%", position: "absolute",marginLeft: "-52%",fontSize:"20px"}}>Click here!</Link>
        </div>
    )
}
