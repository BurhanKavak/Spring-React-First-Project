package com.example.employeebackend.entities;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "languages")
@Data
public class Language {
    @Id
    @GeneratedValue
    @Column(name = "language_id")
    private long id;

    @Column(name = "programmingLanguage")
    private String programmingLanguage;

    @Column(name = "description")
    private String description;




}
