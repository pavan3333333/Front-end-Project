import './Sign.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Sign(){
    const navigate =useNavigate();
    const [input,setInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigate("/Login");
    };
    return(
        <div id="backc">
        <form onSubmit={handleSubmit} id="con22" className="text-center">
            <h1 style={{color:"white"}}>Sign Up</h1><br/>
            <input
            name="name"
            value={input.name}
            onChange={(e) =>
                setInput({
                    ... input,[e.target.name]: e.target.value,           
                })
            }
             type="text" placeholder="Name" className='p-4' id="in1"/>
            <input
            name="email"
            value={input.email}
            onChange={(e) =>
                setInput({
                    ... input,[e.target.name]: e.target.value,           
                })
            }
             type="email" placeholder="Email" className='p-4 mt-2' id="in3"/><br/>
            <input 
            name="password"
            value={input.password}
            onChange={(e) =>
                setInput({
                    ... input,[e.target.name]: e.target.value,           
                })
            }
            type="password" placeholder="Password" className='p-4 mt-2' id="in3"/><br/>
              <button id="#button1" className='btn btn-info p-3 mt-3'>Sign Up</button>
        </form>
        </div>
    )
}
export default Sign;
