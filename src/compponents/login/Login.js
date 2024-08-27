import './Login.css';
import { Link } from "react-router-dom";
function Login(){
    return(
        <div id="bac">
        <div id="lg6" className="text-center ">
            <h1 >LOGIN</h1><br/>
            <input type="text" placeholder="UserName" className='p-2 ' id="inp1"/><br/>
            <input type="text" placeholder="Password" className='p-2 ' id="inp2"/><br/>
             <Link to={`/products/`}><button className='btn btn-info'>LOGIN</button> </Link>
            <p>Not interested?</p>
            <Link to={`/signin/`}> <button className="btn btn-success me-5">Sign Up</button></Link>
        </div>
        </div>
    )
}
export default Login;
