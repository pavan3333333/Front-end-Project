import './Sign.css';
function Sign(){
    return(
        <div id="backc">
        <div id="con22" className="text-center">
            <h1 style={{color:"white"}}>Sign Up</h1><br/>
            <input type="text" placeholder="First Name" className='p-4' id="in1"/>
            <input type="text" placeholder="Last Name" className='p-4 ' id="in2"/><br/>
            <input type="email" placeholder="Email" className='p-4 mt-2' id="in3"/><br/>
            <input type="password" placeholder="Password" className='p-4 mt-2' id="in3"/><br/>
            <input type="password" placeholder="Confirm Password" className='p-4 mt-2' id="in3"/><br/>
            <p style={{color:"white"}}><input type="checkbox"/>I accept the Trems of Use & Privacy Policy</p>
            <button id="#button1" className='btn btn-info p-3 mt-3'>Sign Up</button>
            <p style={{color:"white"}}>Already Having an Account?<a style={{color:"white"}} href="">Login Here</a></p>
        </div>
        </div>
    )
}
export default Sign;
