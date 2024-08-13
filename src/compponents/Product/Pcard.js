import { Link } from "react-router-dom";

function Pcard({props}){
    
    return(
        <div id="div1" style={{ border:"1px solid green", boxShadow:"0 0 10px green",backgroundColor:"white",width:"320px",height:"500px",padding:"10px",borderRadius:"20px"}}>
        <img src={props.image} width={300} height={200} style={{padding:"10px"}} alt="h"/>
        <div style={{textAlign:"center"}}>
        <p>Title:{props.title}</p>
       
        <p>Price:{props.price}</p>
        <p>category:{props.category}</p>
        
        <p>rating:{props.rating.rate}   
        <Link to={`/productdetails/${props.id}`}> <button className="btn btn-success me-5">Product Details</button></Link></p>
        
        </div>
    </div>
    )
}
export default Pcard;