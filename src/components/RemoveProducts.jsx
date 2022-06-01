import React, { useState } from "react";
import Header from "./Header";

const RemoveProducts = () => {
  const [count, setCount] = useState("");

  const deleteProduct = () => {
    const product = [];
    for (var i = 0; i < count; i++) {
      product.push(
        <div class="mt-3 row">
          <label for="pcode" class="col-sm-3 col-form-label">
            Product Code
          </label>
          <div class="col-sm-3">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
            />
          </div>
          <label for="pquantity" class="col-sm-3 col-form-label">
            Quantity
          </label>
          <div class="col-sm-3">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
            />
          </div>
        </div>
      );
    }
    return product;
  };

  return (
    <div>
      <div className="mt-4">
        <Header />
      </div>

      <div class="container-xl mt-5">
        <div class="mb-3 row">
          <label class="col-sm-3 col-form-label">No of Items to Remove</label>
          <div class="col-sm-6">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              onChange={(e) => setCount(e.target.value)}
            />
          </div>

          <div>{deleteProduct()}</div>
          <div class="mt-3">
            {count >= 1 ? (
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-danger ">
                  DELETE
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveProducts;