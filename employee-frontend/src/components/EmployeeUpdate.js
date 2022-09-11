import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EmployeeUpdate({ setRefresh, refresh }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const [ID, setID] = useState(null);
  const [languagesIds, setLanguagesIds] = useState([]);

  const handleUpdate = (id) => {
    const employee = {
      firstName,
      lastName,
      email,
      companyId,
      languagesIds,
    };
    EmployeeService.updateEmployees(id, employee)
      .then((resp) => resp.data)
      .then((resp) => {
        setRefresh(!refresh);
        console.log(resp);
      });
  };
  useEffect(() => {}, [refresh]);

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
  const onLanguagesIdsChange = (e) => {
    console.log(e.target.value);
    setLanguagesIds([e.target.value]);
  };

  useEffect(() => {
    // setFirstName(localStorage.getItem("firstName"));
    // setLastName(localStorage.getItem("lastName"));
    // setEmail(localStorage.getItem("email"));
    // setCompanyId(localStorage.getItem("companyId"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      <div class="form-floating mb-3">
        <div class="form-floating mb-3">
          <input
            type="firstName"
            class="form-control"
            value={firstName}
            placeholder="Burhan"
            onChange={(e) => onFirstNameChange(e)}
          />

          <label className="label-style" for="floatingInputInvalid">
            <b>
              {" "}
              <h5>
                <i>First Name</i>
              </h5>
            </b>
          </label>
        </div>
        <div class="form-floating mb-3">
          <div class="form-floating mb-3">
            <input
              type="lastName"
              class="form-control"
              value={lastName}
              placeholder="Kavak"
              onChange={(e) => onLastNameChange(e)}
            />
            <label className="label-style" for="floatingInput">
              <b>
                <h5>
                  <i>Last Name</i>
                </h5>
              </b>
            </label>
          </div>
          <label for="floatingInput"></label>
          <div class="form-floating mb-3">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                value={email}
                placeholder="burhan.kvk58@gmail.com"
                onChange={(e) => onEmailChange(e)}
              />
              <label className="label-style" for="floatingInput">
                <b>
                  <h5>
                    <i>Email</i>
                  </h5>
                </b>
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="companyId"
                class="form-control"
                value={companyId}
                placeholder="1"
                onChange={(e) => onCompanyIdChange(e)}
              />
              <label className="label-style" for="floatingInput">
                <b>
                  <h5>
                    <i>Company Id</i>
                  </h5>
                </b>
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="languagesIds"
                class="form-control"
                placeholder="1"
                onChange={(e) => onLanguagesIdsChange(e)}
              />

              <label className="label-style" for="floatingInputInvalid">
                <b>
                  {" "}
                  <h5>
                    <i>Languages</i>
                  </h5>
                </b>
              </label>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={handleUpdate(ID)}
          >
            UPDATE EMPLOYEE
          </button>
          ;
        </div>
        <div class="back-style">
          <button
            type="button"
            class="btn btn-outline-danger "
            onClick={() => navigate("/")}
          >
            <i class="bi bi-backspace-fill"> Back to list</i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default EmployeeUpdate;
