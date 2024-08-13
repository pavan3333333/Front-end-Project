import React, { useState } from "react";
import './ProductDetails.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
function ProductDetails(){
    let {id}=useParams();
    let [state,setState]=useState({
    })
const getpdata=()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((proinfo)=>
    {
        setState(proinfo.data);
    }

    ).catch((error)=>{
        alert("error");
    })
}
useEffect(()=>{getpdata()},[])
   


    return(
        <div className="productcontainer">
            <div className="imagecon">
                <img src={state.image} alt="gtfe" width={380} height={480}/>
            </div>
            <div className="contentcon">
                <dl>
                    <dt>Product Name</dt>
                    <dd>{state.title}</dd>
                    <dt>Price</dt>
                    <dd>{state.price}</dd>
                    <dt>description</dt>
                    <dd>{state.description}</dd>
                    <dt>Category</dt>
                    <dd>{state.category}</dd>
                    
                </dl>
            </div>
        </div>
    )

}
export default ProductDetails;