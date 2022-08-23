import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";

function EmployeeAdd() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    const employee = {
      firstName,
      lastName,
      email,
    };
    EmployeeService.postEmployees(employee)
      .then((resp) => resp.data)
      .then((resp) => {
        console.log(resp);
      });
  };

  const onFirstNameChange = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
  };
  const onEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div>
      <div class="form-floating mb-3">
        <div class="form-floating mb-3">
          <input
            type="firstName"
            class="form-control"
            placeholder="Burhan"
            onChange={(e) => onFirstNameChange(e)}
          />
          <label for="floatingInput">First Name</label>
        </div>
        <div class="form-floating mb-3">
          <div class="form-floating mb-3">
            <input
              type="lastName"
              class="form-control"
              placeholder="Kavak"
              onChange={(e) => onLastNameChange(e)}
            />
            <label for="floatingInput">Last Name</label>
          </div>
          <label for="floatingInput"></label>
          <div class="form-floating mb-3">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="burhan.kvk58@gmail.com"
                onChange={(e) => onEmailChange(e)}
              />
              <label for="floatingInput">Email</label>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary"
            onClick={(e) => handleAdd()}
          >
            ADD EMPLOYEEE
          </button>
        </div>
      </div>
    </div>
  );
}
export default EmployeeAdd;
