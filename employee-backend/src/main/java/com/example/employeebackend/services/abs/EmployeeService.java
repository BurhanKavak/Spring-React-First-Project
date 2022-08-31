package com.example.employeebackend.services.abs;

import com.example.employeebackend.dto.EmployeeDtoForPost;
import com.example.employeebackend.dto.EmployeeDtoForPut;
import com.example.employeebackend.entities.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAll ();

    Employee getOneEmployee(Long id);

    Employee createEmployee (EmployeeDtoForPost employeeDtoForPost);

    Employee updateEmployee (Long id,EmployeeDtoForPut employeeDtoForPut);

    void deleteEmployee (Long id);
}
