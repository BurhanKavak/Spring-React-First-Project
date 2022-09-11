package com.example.employeebackend.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "employees")
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private long id;
    @Column(name = "firstName",nullable = false)
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;


    @ManyToMany
    @JoinTable(name = "employeeLanguage",joinColumns = @JoinColumn(name ="employee_id"),inverseJoinColumns = @JoinColumn(name = "language_id"))
    private Set<Language> employeeLanguage;
}
