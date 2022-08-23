import axios from "axios";

const base_url = "http://localhost:8080/api/v1/employee";

class EmployeeService {
  getEmployees() {
    return axios.get(base_url);
  }
  postEmployees(employee) {
    return axios.post(base_url, employee);
  }
}

export default new EmployeeService();
