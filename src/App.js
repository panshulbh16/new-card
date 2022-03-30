import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="img">
      <img src="nee.jpeg" width="200px" classname = "ima"></img> 
       </div>
       <div className="info">
         <div className="title">
          <h1>Neha Raikar</h1>
          <h5>
          <button type="button" class="btn-email"> <a href ="https://www.linkedin.com/in/neha-raikar/">
          Software Engineer</a> </button> 
           </h5>
         </div>
         <div className="buttons">
          <button type="button" class="btn-email"> <a href ="mailto:nehagraikar@gmail.com">
            E-mail</a></button> 
            
            <button type="button" class="btn-email"> <a href ="https://www.linkedin.com/in/neha-raikar/">
            LinkedIN</a></button> 
         </div>
         <div className="text">
         <p className="aboutme"> <center> |Software Engineer at Amazon India|<br></br>|Completed Bachelors of Technology from Ramaiah University|<br></br>
         |Always happy to contribute in different open-source projects|</center> </p> </div>
           <h3 className="interest"> Interests </h3>
           <p className="aboutint">Arts || Tech || Netflix || Travel</p>
       </div>
       <div className="footer">
         <div className="socialicons">
         <button type="button" class="btn"> <a href ="https://leetcode.com/neharaikar/">
            LeetCode</a></button> 
            <button type="button" class="btn"> <a href ="https://www.instagram.com/neharaikar.art/">
            ArtPage</a></button> 
            <button type="button" class="btn"> <a href ="https://github.com/neharaikar">
            Github</a></button> 
         </div>
         <div className="res">
         <button type="button" class="btn"> <a href ="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:612c8380-f6fd-38f5-95be-836f5fcca983">Resume</a></button>
         </div>
       </div>
       <div className="footer">
         <p className="foo">
         Contact No:+91-9110289653 || Bangalore,IN</p></div>
    </div>
  );
}

export default App;
