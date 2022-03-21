import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h1>Little Healer</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

              <form className="d-flex">
                <a
                  href="/login"
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Play Now
                </a>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
