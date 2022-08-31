import "./App.css";
import React, { useEffect, useState } from "react";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeComponent from "./components/EmployeeComponent";
import EmployeeService from "./services/EmployeeService";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((resp) => setEmployees(resp.data));
  }, [refresh]);
  return (
    <div class="container text-center">
      <div class="row">
        <div class="row">
          <EmployeeComponent
            employees={employees}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        </div>
        <div class="row">
          <EmployeeAdd setRefresh={setRefresh} refresh={refresh} />
        </div>
      </div>
    </div>
  );
}

export default App;
