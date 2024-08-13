import "./Profile.css"
import { useState } from "react";
function Profile(){
  let [name,setState]=useState("john");
  const M=()=>{
    setState("sonali");
  }
  const R=()=>{
    setState("john");
  }
      let [image,setImage]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sin68zzmEk5xy9rEuGWDfhyvT-07dKO5jw&s");
      const rohan=()=>{
        setImage("https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1701648000&semt=ais")
      }
      const sonali=()=>{
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sin68zzmEk5xy9rEuGWDfhyvT-07dKO5jw&s")
      };
      let[theme,setTheme]=useState({
        bgColor:"white",
            textColor:"black",});
            const changeTheme=(event)=>{
              if(event.target.checked){
      setTheme({
          bgColor:"black",
          textColor:"white",
      });
          }
      else{
          setTheme({
              bgColor:"white",
              textColor:"black",
          }); 
      }}     
    return(
    <div id="profilecon" style={{display:"flex",flexDirection:"row",width:"1000px",height:"600px",border:"solid",margin:"100px auto"}}>
        <div >
        {/* <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sin68zzmEk5xy9rEuGWDfhyvT-07dKO5jw&s" alt="1"/> */}
        <img src={image} height={597} width={340} alt="1"/>
        </div>
        <div id="content" style={{backgroundColor:theme.bgColor, color:theme.textColor,padding:"15px"}}>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>
        <dt>Class:</dt>
        <dd>IIIrd year</dd>
        <dt>email:</dt>
        <dd>fsdeef@gmail.com</dd>
        <dt>age:</dt>
        <dd>20</dd>
        <dt>Discription:</dt>
        <dd>In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing.
             It is a set of signs that is available to be reconstructed by a reader if sufficient</dd>
        </dl>
        <button onClick={()=>{R();sonali()}} className="btn btn-outline-success" style={{width:"250px",height:"50px",marginLeft:"20px"}}>Male</button>
        <button onClick={()=>{M();rohan()}} className="btn btn-outline-info " style={{width:"250px",height:"50px",marginLeft:"20px"}}>Female</button><br/>
        <input onChange={changeTheme} type="checkbox" style={{marginLeft:"20px"}} />check
        </div>
    </div>
    )
}
export default Profile;