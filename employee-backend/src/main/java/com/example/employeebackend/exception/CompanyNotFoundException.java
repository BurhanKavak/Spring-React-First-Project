package com.example.employeebackend.exception;

public class CompanyNotFoundException extends NotFoundException{

    public CompanyNotFoundException(Long id) {
        super(String.format("Company with %s id could not found ",id));
    }
}
