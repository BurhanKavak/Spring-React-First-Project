package com.example.employeebackend.services;

import com.example.employeebackend.dto.EmployeeDtoForPost;
import com.example.employeebackend.dto.EmployeeDtoForPut;
import com.example.employeebackend.entities.Company;
import com.example.employeebackend.entities.Employee;
import com.example.employeebackend.exception.EmployeeNotFoundException;
import com.example.employeebackend.repository.EmployeeRepository;
import com.example.employeebackend.services.abs.CompanyService;
import com.example.employeebackend.services.abs.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
@RequiredArgsConstructor
public class EmployeeServiceImp implements EmployeeService {

    private final EmployeeRepository repository;

    private final CompanyService companyService;

    @Override
    public List<Employee> getAll() {
        return repository.findAll();
    }

    @Override
    public Employee getOneEmployee(Long id) {
        return repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @Override
    public Employee createEmployee(EmployeeDtoForPost request) {
        Company company = companyService.getOneCompany(request.getCompanyId());

        Employee employee = new Employee();

        // Map işlemi yapıyoruz burası düzeltilecek
        employee.setFirstName(request.getFirstName());
        employee.setLastName(request.getLastName());
        employee.setEmail(request.getEmail());
        employee.setCompany(company);

        return repository.save(employee);

    }

    @Override
    public Employee updateEmployee(Long id, EmployeeDtoForPut request) {
        Company company = companyService.getOneCompany(request.getCompanyId());

        // Employee var mı yok mu onu kontrol ediyoruz varsa employee bilgilerini getirir yoksa hata fırlatır
        Employee employee = getOneEmployee(id);// hata fırlatan methodumuz bu kısım olur.
        employee.setFirstName(request.getFirstName());
        employee.setLastName(request.getLastName());
        employee.setEmail(request.getEmail());
        employee.setCompany(company);

        return repository.save(employee);

    }

    @Override
    public void deleteEmployee(Long id) {
        repository.deleteById(getOneEmployee(id).getId());
    }


}
