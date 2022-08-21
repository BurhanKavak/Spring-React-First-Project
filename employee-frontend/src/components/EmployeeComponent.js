import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

function EmployeeComponent() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    EmployeeService.getEmployees().then((resp) => {
      setEmployees(resp.data);
      console.log(resp.data);
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Employees List</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeComponent;
