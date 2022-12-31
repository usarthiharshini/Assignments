import { Link } from "react-router-dom";

export default function Navbar(){
    return <div>
        
        <div id="navbar">
            <Link to="/" >Home</Link>
          <Link to="/products" >Products</Link>
            
        </div>


    </div>
}