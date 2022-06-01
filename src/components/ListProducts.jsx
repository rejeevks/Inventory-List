import React from "react";
import Header from "./Header";

const ListProducts = () => {
  let table = [];
  return (
    <div>
      <div className="mt-4">
        <Header />
      </div>

      <div class="container-xl mt-5">
        {table.length > 0 ? (
          <table class="table table-bordered mt-2">
            <thead>
              <tr>
                <th scope="col">Product Code</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {table &&
                table.map((item) => (
                  <tr>
                    <td>{item.pcode}</td>
                    <td>{item.pname}</td>
                    <td>{item.pquantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h4 className="text-center">No Items Available</h4>
        )}
      </div>
    </div>
  );
};

export default ListProducts;
