import { useState } from "react";
import  axios from "axios";
import Pcard from "./Pcard";
import './Products.css';
function ProPromise(){
    let [Products,setState]=useState([])

    const getallp=()=>{
        axios.get("https://fakestoreapi.com/products").then((Productsdata)=>{
           console.log(Productsdata);
           setState(Productsdata.data);
        }).catch(
            (errordata)=>{
                console.log("error");
            }
        );
    };
    const getmensp=()=>{
        axios.get("https://fakestoreapi.com/products/category/men's clothing").then((Productsdata)=>{
           console.log(Productsdata);
           setState(Productsdata.data);
        }).catch(
            (errordata)=>{
                console.log("error");
            }
        );
    };
    const getwomensp=()=>{
        axios.get("https://fakestoreapi.com/products/category/women's clothing").then((Productsdata)=>{
           console.log(Productsdata);
           setState(Productsdata.data);
        }).catch(
            (errordata)=>{
                console.log("error");
            }
        );
    };
    const getelecp=()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics").then((Productsdata)=>{
           console.log(Productsdata);
           setState(Productsdata.data);
        }).catch(
            (errordata)=>{
                console.log("error");
            }
        );
    };
    const getjewp=()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery").then((Productsdata)=>{
           console.log(Productsdata);
           setState(Productsdata.data);
        }).catch(
            (errordata)=>{
                console.log("error");
            }
        );
    };
    

    return(
        <div id="abc" >
            <div style={{textAlign:"center",color:"White"}} >
            <h1 style={{color:"orange"}}>Products</h1>
            <br/>
            <h1>No of Products:{Products.length}</h1>
            
            <input type="radio" name="a" id="ALL"  onChange={getallp}/>
              <label for="ALL">ALL</label>
            <input type="radio" name="a" id="men's clothing" onChange={getmensp}/>
            <label for="menswear">Mensclothing</label>
            <input type="radio" name="a" id="jewelery" onChange={getjewp} />
            <label for="furniture">Jewelery</label>
            <input type="radio" name="a" id="electronics" onChange={getelecp}/>
            <label for="electronics">Electronics</label>
            <input type="radio" name="a" id="women's clothing" onChange={getwomensp}/>
            <label for="Women">Womensclothing</label>
            </div>

<div id="fl">
   {
    Products.map(function(ele,inx){
        return <Pcard props={ele}/>
    })
   }
</div>

        </div>
    );
}
export default ProPromise;