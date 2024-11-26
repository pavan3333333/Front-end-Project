import './Login.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Login(){
    const navigate =useNavigate();
    const [input,setInput] = useState({
        email: "",
        password: "",
    });
    const handleLogin = (e) =>{
        e.preventDefault();
       const loggeduser =JSON.parse(localStorage.getItem("user"));
       if(
        input.email === loggeduser.email &&
        input.password === loggeduser.password
       )
       {
        navigate("/products");
       }else{
        alert("Wrong Email Or Password");
       }
    };
    return(
        <div id="bac">
        <form onSubmit={handleLogin} id="lg6" className="text-center ">
            <h1 >LOGIN</h1><br/>
            <input 
            name="email"
            value={input.email}
            onChange={(e) =>
                setInput({
                    ... input,[e.target.name]: e.target.value,           
                })
            }
            type="text" placeholder="Email" className='p-2 ' id="inp1"/><br/>
            <input 
             name="password"
             value={input.password}
             onChange={(e) =>
                 setInput({
                     ... input,[e.target.name]: e.target.value,           
                 })
             }
            type="text" placeholder="Password" className='p-2 ' id="inp2"/><br/>
            <button className='btn btn-info'>LOGIN</button>
            <p>Not interested?</p>
            <Link to={`/signin/`}> <button className="btn btn-success me-5">Sign Up</button></Link>
        </form>
        </div>
    )
}
export default Login;
