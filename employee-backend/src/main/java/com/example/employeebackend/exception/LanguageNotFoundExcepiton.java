package com.example.employeebackend.exception;

public class LanguageNotFoundExcepiton extends NotFoundException{
    public LanguageNotFoundExcepiton(Long id) {
        super(String.format("Language with %s id could not found",id));
    }
}
