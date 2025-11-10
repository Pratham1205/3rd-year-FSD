import React from "react";
import './header.css'

const header = () => {
  return (
    <div id="head">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          
          
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
