package com.example.employeebackend.services;

import com.example.employeebackend.entities.Company;
import com.example.employeebackend.exception.CompanyNotFoundException;
import com.example.employeebackend.exception.NotFoundException;
import com.example.employeebackend.repository.CompanyRepository;
import com.example.employeebackend.services.abs.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImp implements CompanyService {

    private final CompanyRepository repository;

    @Override
    public List<Company> getAll() {
        return repository.findAll();
    }

    @Override
    public Company getOneCompany(Long id) {
       Company company = repository.findById(id).orElseThrow(() -> new CompanyNotFoundException(id));
       return company;

    }

    @Override
    public Company createOneCompany(Company company) {
        return repository.save(company);
    }

    @Override
    public Company updateOneCompany(Long id, Company company) {
        getOneCompany(id);
        company.setId(id);
        Company data = repository.save(company);
        return data;
    }

    @Override
    public void deleteOneCompany(Long id) {
        getOneCompany(id);
        repository.deleteById(id);

    }
}
