import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const RemoveProducts = () => {
  const [count, setCount] = useState("");
  const [allData, setAllData] = useState([]);
  const [deleteCode, setDeleteCode] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    setAllData(items);
  }, []);
  // console.log(allData);

  const handleRemoveFields = (deleteCode) => {
    const newAllData = allData.filter((item) => item.pcode !== deleteCode);
    localStorage.setItem("data", JSON.stringify(newAllData));
  };

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
              onChange={(e) => {
                setDeleteCode(e.target.value);
              }}
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
      <div class="position-absolute pt-5 start-50 translate-middle">
        <h4>Remove from list</h4>
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
                <Link to="/listproducts">
                  <button
                    type="button"
                    class="btn btn-danger "
                    onClick={() => handleRemoveFields(deleteCode)}
                  >
                    DELETE
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveProducts;
