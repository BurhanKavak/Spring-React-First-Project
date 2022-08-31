package com.example.employeebackend.dto;


import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Data
public class EmployeeDtoForPost {

    @NotNull(message = "first name cannot be null")
    @NotBlank(message = "first name cannot be blank")
    @Size(min = 3,max = 15)
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private long companyId;
}
