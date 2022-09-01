import React from "react";
import EmployeeService from "../services/EmployeeService";

function EmployeeComponent({ employees, refresh, setRefresh }) {
  const handleDelete = (id) => {
    EmployeeService.deleteEmpployees(id).then((resp) => {
      console.log(resp);
      setRefresh(!refresh);
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Employees List</h1>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeComponent;
