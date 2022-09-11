import "./App.css";

import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeComponent from "./components/EmployeeComponent";

import EmployeeAppBar from "./components/EmployeeAppBar";
import { Routes, Route } from "react-router-dom";

import EmployeeUpdate from "./components/EmployeeUpdate";
import CompanyList from "./components/company/CompanyList";
import LanguageList from "./components/language/LanguageList";

function App() {
  return (
    <div className="App">
      <EmployeeAppBar />
      <Routes>
        <Route path="" element={<EmployeeComponent />}></Route>{" "}
        <Route
          path="/burhan/employee/add"
          element={
            <div class="container text-center">
              <EmployeeAdd />
            </div>
          }
        ></Route>{" "}
        {/* <div class="container text-center">
          <div class="row">
            <div class="row">
              <EmployeeComponent />
            </div>
            <div class="row">
              <EmployeeAdd setRefresh={setRefresh} refresh={refresh} />
            </div>
          </div>
        </div> */}
        <Route path="/burhan/companies/list" element={<CompanyList />} />
        <Route path="/burhan/languages/list" element={<LanguageList />} />
        <Route
          path="/burhan/employee/update"
          element={
            <div class="container text-center">
              <EmployeeUpdate />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
