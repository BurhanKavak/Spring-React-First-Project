import React from "react";
import EmployeeService from "../services/EmployeeService";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmployeeComponent() {
  const [refresh, setRefresh] = useState(false);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((resp) => setEmployees(resp.data));
  }, [refresh]);

  const handleDelete = (id) => {
    EmployeeService.deleteEmpployees(id).then((resp) => {
      console.log(resp);
      setRefresh(!refresh);
    });
  };
  const setData = (id, firstName, lastName, email, companyId) => {
    localStorage.setItem("ID", id);
    // localStorage.setItem("firstName", firstName);
    // localStorage.setItem("lastName", lastName);
    // localStorage.setItem("email", email);
    // localStorage.setItem("companyId", companyId);
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: "#d64161" }}>
        Employees List
      </h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Employee Id </th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Company</th>
            <th>
              <i>DELETE</i>
            </th>
            <th>
              <i>UPDATE</i>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.company.companyName}</td>
              <td>
                <button
                  onClick={(e) => handleDelete(employee.id)}
                  type="button"
                  class="btn btn-outline-danger btn-lg"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
              <td>
                <Link to="/burhan/employee/update">
                  <button
                    onClick={() =>
                      setData(
                        employee.id
                        // employee.firstName,
                        // employee.lastName,
                        // employee.email,
                        // employee.company.id
                      )
                    }
                    type="button"
                    class="btn btn-outline-danger btn-lg"
                  >
                    <i class="bi bi-plus-circle-dotted"></i>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="container text-center">
        <button
          class="btn btn-outline-danger btn-lg"
          onClick={() => navigate("/burhan/employee/add")}
        >
          <b>
            {" "}
            <i class="bi bi-person-plus-fill">ADD</i>
          </b>
        </button>
      </div>
    </div>
  );
}

export default EmployeeComponent;
