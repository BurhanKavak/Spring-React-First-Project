package com.example.employeebackend.services.abs;

import com.example.employeebackend.entities.Company;

import java.util.List;

public interface CompanyService {
    List<Company> getAll ();

    Company getOneCompany(Long id);

    Company createOneCompany(Company company);

    Company updateOneCompany(Long id,Company company);

    void deleteOneCompany(Long id);
}
