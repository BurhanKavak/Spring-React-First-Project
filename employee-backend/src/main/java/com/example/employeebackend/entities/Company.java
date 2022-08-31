package com.example.employeebackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "companies")
@Data
public class Company {
    @Id
    @GeneratedValue
    @Column(name = "company_id")
    private long id;

    @Column(name = "companyName")
    private String companyName;

    @Column(name = "income")
    private double income;

    @JsonIgnore
    @OneToMany(mappedBy = "company")
    private List<Employee> employees;
}
