package com.example.employeebackend.services.abs;

import com.example.employeebackend.entities.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAll ();

    Employee create (Employee employee);
}
