package com.example.employeebackend.controller;

import com.example.employeebackend.entities.Company;
import com.example.employeebackend.services.abs.CompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/company")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    public ResponseEntity<List<Company>> getAll(){
        List<Company> companies = companyService.getAll();
        return ResponseEntity.ok(companies);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Company> getOneCompany(@PathVariable(name = "id") Long id){
        Company company = companyService.getOneCompany(id);
        return ResponseEntity.ok(company);
    }
    @PostMapping
    public ResponseEntity<Company> createOneCompany (@RequestBody Company company){
        Company data = companyService.createOneCompany(company);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Company> updateOneCompany(@PathVariable(name = "id") Long id,@RequestBody Company company){
        Company data = companyService.updateOneCompany(id,company);
        return new ResponseEntity<>(data,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOneCompany (@PathVariable(name = "id") Long id){
        companyService.deleteOneCompany(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
