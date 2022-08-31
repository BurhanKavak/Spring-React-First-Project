package com.example.employeebackend.exception;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EmpExceptionHandler {
    ErrorResponse errorResponse;


    @ExceptionHandler(EmployeeNotFoundException.class)
    public ResponseEntity<?> employeeNotFound (EmployeeNotFoundException exception){
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        errorResponse = new ErrorResponse("Employee is not found ", details);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(CompanyNotFoundException.class)
    public ResponseEntity<?> companyNotFound (CompanyNotFoundException exception){
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        errorResponse = new ErrorResponse("Company is not found", details);
        return new ResponseEntity<>(errorResponse,HttpStatus.BAD_REQUEST);
    }




}
