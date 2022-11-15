import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
    //   <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
    //     <Link className="text-dark" to="/">
    //       <h1 className="m-0" style={{ fontSize: "3rem" }}>
    //         TravelX
    //       </h1>
    //     </Link>
    //     <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
    //       Plan your getaway with ease!
    //     </p>
    //     <div>
    //       {Auth.loggedIn() ? (
    //         <>
    //           <Link className="btn btn-lg btn-primary m-2" to="/me">
    //             View My Profile
    //           </Link>
    //           <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link className="btn btn-lg btn-primary m-2" to="/login">
    //             Login
    //           </Link>
    //           <Link className="btn btn-lg btn-light m-2" to="/signup">
    //             Signup
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        {/* <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          ></img> */}
        <a class="navbar-item">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            TravelX
          </h1>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          {/* <a class="navbar-item">Home</a> */}
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <a class="navbar-item">Plan A Trip</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item">More</a>

            {/* <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item">Report an issue</a>
            </div> */}
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {/* <a class="button is-primary">
                <strong>Sign up</strong>
              </a> */}
              <Link className="button is-primary" to="/signup">
                Signup
              </Link>
              {/* <a class="button is-light">Log in</a> */}
              <Link className="button is-light" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
