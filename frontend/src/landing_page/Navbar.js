import React from "react";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
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
          <form class="d-flex" role="search">
            {/* <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item"> */}
            {/* <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
                <Link
                  className="nav-link"
                  style={{
                    color: location.pathname === "/about" ? "#387ed1" : "black",
                    fontWeight: location.pathname === "/about" ? "600" : "400"
                  }}
                  to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Support">
                  Support
                </Link>
              </li>
            </ul> */}
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color:
                      location.pathname === "/signup" ? "#387ed1" : "black",
                    fontWeight: location.pathname === "/signup" ? "600" : "400",
                  }}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: location.pathname === "/about" ? "#387ed1" : "black",
                    fontWeight: location.pathname === "/about" ? "600" : "400",
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color:
                      location.pathname === "/product" ? "#387ed1" : "black",
                    fontWeight:
                      location.pathname === "/product" ? "600" : "400",
                  }}
                  to="/product"
                >
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color:
                      location.pathname === "/pricing" ? "#387ed1" : "black",
                    fontWeight:
                      location.pathname === "/pricing" ? "600" : "400",
                  }}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color:
                      location.pathname === "/support" ? "#387ed1" : "black",
                    fontWeight:
                      location.pathname === "/support" ? "600" : "400",
                  }}
                  to="/support"
                >
                  Support
                </Link>
              </li>

              {/*Dashboard Button */}
              <li className="nav-item d-flex align-items-center">
                <a
                  href="https://stock-bridge-ylax.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    marginLeft: "20px",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
