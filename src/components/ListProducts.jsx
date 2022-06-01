import React, { useEffect, useState } from "react";
import Header from "./Header";

const ListProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    setData(items);
  }, []);
  // console.log(data);

  const dataLength = data ? data.length : null;
  return (
    <div>
      <div className="mt-4">
        <Header />
      </div>
      <div class="position-absolute pt-5 start-50 translate-middle">
        <h4>Products List</h4>
      </div>
      <div class="container-xl mt-5">
        {dataLength > 0 ? (
          <table class="table table-bordered mt-2">
            <thead>
              <tr>
                <th scope="col">Product Code</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
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
