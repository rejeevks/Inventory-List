import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item px-3">
          <Link class="nav-link active" to="/addproducts">
            Add Products
          </Link>
        </li>
        <li class="nav-item px-3">
          <Link class="nav-link active" to="/removeproducts">
            Remove Products
          </Link>
        </li>
        <li class="nav-item px-3">
          <Link class="nav-link active" to="/listproducts">
            List Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
