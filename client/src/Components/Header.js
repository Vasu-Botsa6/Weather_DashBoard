import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-black bg-light justify-content-between">
      <h1>
        <a className="navbar-brand mx-2">Weather Dashboard</a>
      </h1>
      <form className="form-inline">
        <div className="input-group">
          <input
            className="form-control mr-sm-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default Header;
