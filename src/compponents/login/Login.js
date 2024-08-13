import './Login.css';
function Login(){
    return(
        <div id="bac">
        <div id="lg6" className="text-center ">
            <h1 >LOGIN</h1><br/>
            <input type="text" placeholder="UserName" className='p-2 ' id="inp1"/><br/>
            <input type="text" placeholder="Password" className='p-2 ' id="inp2"/><br/>
            <button className='btn btn-info'>LOGIN</button>
            <p>Not interested?</p><h3><a href="">Create an Account</a></h3>
        </div>
        </div>
    )
}
export default Login;
