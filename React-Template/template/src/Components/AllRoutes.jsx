import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Products";

export default function AllPages(){
    return <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
        </Routes>
    </div>
}