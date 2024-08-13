import axios  from "axios";
import { useState } from "react";
function Users(){
    let[Users,setusers]=useState([])
    const getin=()=>{
axios.get("https://randomuser.me/api/?results=50").then((usersdata)=>{
    console.log(usersdata.data.results);
setusers(usersdata.data.results);
}).catch((errordata)=>{
    console.log(errordata);
});
    };

    return(
        <div style={{padding:"10px 30px"}}>
            <h2>users info</h2>
            <p>lorem
            The Indian Premier League  is a professional Twenty20 cricket league in India, founded by the Board of Control for Cricket in India (BCCI) in 2008. It has rapidly become one of the most popular and lucrative cricket leagues globally. Each year, eight teams representing different cities or regions compete in a round-robin format followed by playoffs, culminating in the IPL Final. The league features top international players alongside domestic 
            talent, making it a highly competitive and entertaining spectacle for cricket fans worldwide. Apart for Cricket in India (BCCI) in 2008. It has rapidly become one of the most popular and lucrative cricket leagues globally. Each year, eight teams representing different cities or regions compete in a round-robin format followed by playoffs, culminating in the IPL Final. The league features top international players alongside domestic 
            talent, making it a highly competitive and entertaining spectacle for cricket fans worldwide.
            </p>
            <button onClick={getin} className="btn btn-outline-success">get info</button>
            <div className="mt-5">
                {
                    Users.length >0 ?
                <table className="table table.hover">
                       <thead >
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>gender</th>
                        <th>email</th>
                       </thead>
                       <tbody>
                        {
                            Users.map(function(user,index){
                              return(
                                <tr>
                                <td>{index+1}</td>
                                <td><img src={user.picture.medium} width={70} height={70}/></td>
                                <td>{user.name.first}{user.name.last}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                             </tr>
                              );
                            })
                        }
                       </tbody>
                </table>
                :
                <div style={{color:"red",marginLeft:"500px"}}><h2 >NO DATA FOUND </h2></div>
}
            </div>
        </div>
    )
}
export default Users;