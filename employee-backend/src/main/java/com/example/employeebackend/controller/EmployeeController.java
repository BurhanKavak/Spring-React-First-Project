package com.example.employeebackend.controller;

import com.example.employeebackend.entities.Employee;
import com.example.employeebackend.services.abs.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/employee")
@CrossOrigin
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAll(){
       List<Employee> employees = service.getAll();
       return ResponseEntity.ok(employees);
    }
    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody Employee employee){
        Employee emp = service.create(employee);
        return new ResponseEntity<>(emp, HttpStatus.CREATED);
    }
}
