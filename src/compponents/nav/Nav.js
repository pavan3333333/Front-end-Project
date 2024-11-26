import { Link } from "react-router-dom";
function Nav(){
  return(
      <div>
      <Link to="/">Login</Link>
             <Link to="/signin">SignUp</Link>
             <Link to="/homepage">Home page</Link>
             <Link to="/profile">Profile</Link>
             <Link to="/products">Products</Link>
             <Link to="/users">Users</Link>
      </div>
    
  );
  }
export default Nav;