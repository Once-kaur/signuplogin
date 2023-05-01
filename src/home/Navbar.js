// import React from "react"
// import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from "../../Home";
 //import Head from "./Head";
//import Footer from "../footer/Footer";
// // import Signupform from "../other/Sign";
// // import Productuploadform from "../../ProductUpload";
// import Head from "./Head";
// import Footer from "./Footer";

// const Navbar=()=>{
    
//     return(
//         <>
//         <Router>
//          <Switch>
//              {/* <Route path="/"  element={<Home/>}/> */}
//              <Route path="/Header" element={<Head/>}/>
//             <Route path="/Footer" element={<Footer/>}/>
//             {/* <Route path="/upload"element={<Productuploadform/>}/>
//             <Route path="/Signup"element={<Signupform/>}/> */}
//          </Switch>
           
          
//         </Router>
//         </>
//     )
// }
// export default Navbar
import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">Tradeit</div>
           <ul className="nav-links">
              {/* <Link to="/">profile</Link> */}
              <Link to="/upload">upload new product</Link>
              <Link to="/login">Login</Link>

           </ul>
        </div>
  );

}