import React, { useState } from "react";
import Header from "./Header";
const AddProducts = () => {
  const [count, setCount] = useState("");

  const [inputFields, setInputFields] = useState([
    { pcode: "", pname: "", pquantity: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index][event.target.name] = event.target.value;

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { pcode: "", pname: "", pquantity: "" }]);
  };

  // const handleRemoveFields = (id) => {
  //   const values = [...inputFields];
  //   values.splice(
  //     values.findIndex((value) => value.id === id),
  //     1
  //   );
  //   setInputFields(values);
  // };

  return (
    <div>
      <div className="mt-4">
        <Header />
      </div>

      <div class="container-xl mt-5">
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            No of Items to Add
          </label>
          <div class="col-sm-6" style={{ display: "flex" }}>
            <input
              class="form-control"
              aria-label="default input example"
              type="number"
              // onChange={(e) => setCount(parseInt(e.currentTarget.value, 10))}
            />
            <div style={{ marginLeft: "10px" }}>
              <button
                class="btn btn-success"
                type="button"
                // onClick={() => {
                //   setFields(count);
                // }}
                onClick={handleAddFields}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputField, index) => (
            <div className="form-inline" key={index}>
              <div class="mt-3 row">
                <label for="pcode" class="col-sm-2 col-form-label">
                  Product Code
                </label>
                <div class="col-sm-2">
                  <input
                    class="form-control"
                    type="text"
                    aria-label="default input example"
                    name={"pcode"}
                    value={inputField.pcode}
                    onChange={(event) => handleChangeInput(index, event)}
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
                    name="pname"
                    value={inputField.pname}
                    onChange={(event) => handleChangeInput(index, event)}
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
                    name="pquantity"
                    value={inputField.pquantity}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                </div>
              </div>
            </div>
          ))}
          <div class="mt-3">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                class="btn btn-success"
                type="submit"
                // onClick={handleSubmit}
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
