
import {Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar =() => {
    return (
      <div className="navbar">
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/'  className="navbar-brand text-warning">WebDevStudio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 text-warning">
            <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/aboutus' className="nav-link">AboutUs</Link>
              </li>
              <li className="nav-item">
                <Link to='/marketing' className="nav-link">Marketing</Link>
              </li>
              <li className="nav-item">
                <Link to='/testimonials' className="nav-link ">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </div>
    );
  }
   export default Navbar;