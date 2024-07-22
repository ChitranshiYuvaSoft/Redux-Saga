import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 py-4 text-white">Todo-PROPS</span>
        <span>
          <button className="p-2 bg-light text-dark fw-bold px-3">Light Mode</button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
