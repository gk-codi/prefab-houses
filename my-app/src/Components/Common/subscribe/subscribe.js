import React from "react";
import "./subscribe.css";

const openForm = () => document.getElementById("myForm").style.display = "none";
const closeForm = () => document.getElementById("myForm").style.display = "block";
 
const Subscribe= props => {
  return (
   
<body>

<h2>Subsucribe Form</h2>


<button className="open-button" onClick={closeForm}>Subsucribe Now</button>
{/* onClick={() => document.getElementById("myForm").style.display = "block"} */}
<div className="form-popup" id="myForm">
  <form  className="form-container">
    <h1>Subsucribe</h1>

    <label for="mail"><b>Email</b><br/></label>
    <input type="email" placeholder="Enter Your Email" name="mail" required/>

    <label for="txt"><b>Location</b><br/></label>
    <input type="text" placeholder="Enter Your City" name="txt" required/>

    <button type="submit" className="btn">Submit</button>
    <button type="button" className="btn cancel" onClick={openForm}>Close</button>
  </form>
</div>
{/* onClick={() => document.getElementById("myForm").style.display = "none"} */}



</body>
  );
};

export default Subscribe;