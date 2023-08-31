import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Nevbar extends Component {
  render() {
    return (
        <>
        <nav  className=" fixed-top" >
        <form className="container-fluid justify-content-star">
          
        <Link className="navbar-brand" to="/home"><button className="btn btn-primary " >Headlines</button></Link>
         <Link className="navbar-brand" to="/business"><button className="btn btn-outline-warning " >Business</button></Link>
         <Link className="navbar-brand" to="/entertainment"><button className="btn btn-outline-warning " >Entertainment</button></Link>
         <Link className="navbar-brand" to="/general"><button className="btn btn-outline-warning " >General</button></Link>
         <Link className="navbar-brand" to="/health"><button className="btn btn-outline-warning" >Health</button></Link>
         <Link className="navbar-brand" to="/science"><button className="btn btn-outline-warning " >Science</button></Link>
         <Link className="navbar-brand" to="/sports"><button className="btn btn-outline-warning " >Sports</button></Link>
         <Link className="navbar-brand" to="/technology"><button className="btn btn-outline-warning" >Technology</button></Link>
      
        </form>
      </nav>
      </>
    );
  }
}

export default Nevbar;

