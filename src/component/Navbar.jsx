import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 shadow-lg ">
        <div class="container">
          <a class="navbar-brand fw-bold  fs-4 " href="#">
            Freshcommerce
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
             {/* <form class="d-flex" role="search">
              <input
                class="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
             </form> */}
             <i class="bi bi-search"></i>
            <div className="buttons">
                <a href="" className="btn btn-outline-dark">
                 <i class="fa fa-sign-in me-1" aria-hidden="true"></i>login</a>
                <a href="" className="btn btn-outline-dark ms-2">
                 <i class="fa fa-shopping-cart me-1" aria-hidden="true"></i>cart(0)</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    

  );
};
export default Navbar;
