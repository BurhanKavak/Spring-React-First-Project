package com.example.employeebackend.controller;

import com.example.employeebackend.dto.EmployeeDtoForPost;
import com.example.employeebackend.dto.EmployeeDtoForPut;
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

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getOneEmployee(@PathVariable(name = "id") Long id){
        Employee employee = service.getOneEmployee(id);
        return ResponseEntity.ok(employee);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody EmployeeDtoForPost request){
        Employee employee = service.createEmployee(request);
        return new ResponseEntity<>(employee,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee (@PathVariable(name = "id") Long id,@RequestBody EmployeeDtoForPut request){
        Employee employee = service.updateEmployee(id,request);
        return new ResponseEntity<>(employee,HttpStatus.ACCEPTED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee (@PathVariable(name = "id") Long id){
        service.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
