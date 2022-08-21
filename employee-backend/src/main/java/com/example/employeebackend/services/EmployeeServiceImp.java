package com.example.employeebackend.services;

import com.example.employeebackend.entities.Employee;
import com.example.employeebackend.repository.EmployeeRepository;
import com.example.employeebackend.services.abs.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class EmployeeServiceImp implements EmployeeService {

    private final EmployeeRepository repository;

    @Override
    public List<Employee> getAll() {
        return repository.findAll();
    }

    @Override
    public Employee create(Employee employee) {
        return repository.save(employee);
    }
}
