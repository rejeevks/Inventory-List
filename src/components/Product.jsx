import React from "react";

const Product = () => {
  const products = [];

  return (
    <div>
      {products.push(
        <div class="mt-3 row">
          <label for="pcode" class="col-sm-2 col-form-label">
            Product Code
          </label>
          <div class="col-sm-2">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
            />
          </div>
          <label for="pname" class="col-sm-2 col-form-label">
            Product Name
          </label>
          <div class="col-sm-2">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
            />
          </div>
          <label for="pquantity" class="col-sm-2 col-form-label">
            Quantity
          </label>
          <div class="col-sm-2">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
