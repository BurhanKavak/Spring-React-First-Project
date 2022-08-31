import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";

function EmployeeAdd({ setRefresh, refresh }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyId, setCompanyId] = useState(0);

  const handleAdd = () => {
    const employee = {
      firstName,
      lastName,
      email,
      companyId,
    };
    EmployeeService.postEmployees(employee)
      .then((resp) => resp.data)
      .then((resp) => {
        setRefresh(!refresh);
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
  const onCompanyIdChange = (e) => {
    console.log(e.target.value);
    setCompanyId(e.target.value);
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
            <div class="form-floating mb-3">
              <input
                type="companyId"
                class="form-control"
                placeholder="1"
                onChange={(e) => onCompanyIdChange(e)}
              />
              <label for="floatingInput">Company Id</label>
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
