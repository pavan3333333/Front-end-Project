import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import Grid from './Grid';
import Login from './compponents/login/Login';
import Sign  from './compponents/signin/Sign';
import Carosol from './compponents/carosal/Carosol';
import Team from './compponents/Team';
import About from './compponents/about/About';
import Info from './compponents/info/Info';
import Videos from './compponents/Videos/Videos';
import Profile from './compponents/Profile/Profile';
import Users from './compponents/UserComponent/User';
import ProPromise from './compponents/Product/ProPromise';
import Nav from './compponents/nav/Nav';
import PagenF from './compponents/Pagenot/PagenF';
import ProductDetails from './compponents/Product/ProductDetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function Hp(){
    return(
        <div style={{width:"150%"}}><App/><About/><Carosol/><Team/><Grid/><Videos/><Info/></div>
    )
}
function Add(){
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signin" element={<Sign/>}/>
            <Route path="/homepage" element={<Hp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/products" element={<ProPromise/>}/>
            <Route path="/users" element={<Users/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<PagenF/>}/>
        </Routes>
        </BrowserRouter>
    );
}
ReactDOM.render(<Add/>,document.getElementById('root'))
