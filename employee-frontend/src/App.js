import "./App.css";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="row">
          <EmployeeComponent />
        </div>
        <div class="row">
          <EmployeeAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
