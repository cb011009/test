import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
       <Link to="/"><button>Hospital DashBoard</button></Link> 
       <Link to="/bloodStorage"><button>View Blood Bank Storage</button></Link> 
       <Link to="/searchBloodbank"><button>Search For Blood Banks</button></Link> 
    </nav>
  );
}

export default Navbar;