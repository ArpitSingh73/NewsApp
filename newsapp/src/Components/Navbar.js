import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark "  >
                <div className="container-fluid  mx-auto">
                    <Link className="navbar-brand " to="/" style={{ margin:"15px"   , border:"solid 2px black", borderRadius:"4px", fontSize:"25px"}}  >NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent "  >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto"  style={{float:"left"  }}>
                            <li className="nav-item" style={{backgroundColor:"#4d4d4d" ,  margin:"10px" , border:"solid 2px black", borderRadius:"4px"}} >
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"  style={{backgroundColor:"#4d4d4d",  margin:"10px" , border:"solid 2px black", borderRadius:"4px" }}><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"  style={{backgroundColor:"#4d4d4d" ,  margin:"10px" , border:"solid 2px black", borderRadius:"4px"}}><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"  style={{backgroundColor:"#4d4d4d" ,  margin:"10px" , border:"solid 2px black", borderRadius:"4px"}}><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"  style={{backgroundColor:"#4d4d4d" ,  margin:"10px" , border:"solid 2px black", borderRadius:"4px"}}><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"  style={{backgroundColor:"#4d4d4d" ,  margin:"10px" , border:"solid 2px black", borderRadius:"4px"}}> <Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item" style={{backgroundColor:"#4d4d4d" ,  margin:"10px" , border:"solid 2px black", borderRadius:"4px"}}><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"  style={{backgroundColor:"#4d4d4d" ,  margin:"10px" , border:"solid 2px black", borderRadius:"4px"}}><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar