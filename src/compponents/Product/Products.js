import { useState } from "react";
import { productsdata } from "./productdata";
import Pcard from "./Pcard";
import './Products.css';
function Products(){
    let [state,setState]=useState(productsdata)
    let[change,setChange]=useState("ALL")
    const fp = filterdata();
    function filterdata (){
        if (change === "ALL") {
            return state;
        } 
        
        
        else
        {
            return state.filter(function (ele) {
                return ele.category === change;
            });
        }
    }
    

    return(
        <div id="abc" >
            <div style={{textAlign:"center",color:"White"}} >
            <h1 style={{color:"orange"}}>Products</h1>
            <br/>
            <h1>No of Products:{state.length}</h1>
            
            <input type="radio" name="a" id="ALL"  onChange={e=>setChange(e.target.id) } defaultChecked/>
              <label for="ALL">ALL</label>
            <input type="radio" name="a" id="men's clothing" onChange={e=>setChange(e.target.id)}/>
            <label for="menswear">Mensclothing</label>
            <input type="radio" name="a" id="jewelery" onChange={e=>setChange(e.target.id)}/>
            <label for="furniture">Jewelery</label>
            <input type="radio" name="a" id="electronics" onChange={e=>setChange(e.target.id)}/>
            <label for="electronics">Electronics</label>
            <input type="radio" name="a" id="women's clothing" onChange={e=>setChange(e.target.id)}/>
            <label for="Women">Womensclothing</label>
          
            </div>

<div id="fl">
   {
    fp.map(function(ele,inx){
        return <Pcard props={ele}/>
    })
   }
</div>

        </div>
    );
}
export default Products;