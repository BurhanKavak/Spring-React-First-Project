package com.example.employeebackend.exception;

public class EmployeeNotFoundException extends NotFoundException{

    public EmployeeNotFoundException(Long id) {
        super(String.format("Employee with %s id could not found ",id));
    }
}
