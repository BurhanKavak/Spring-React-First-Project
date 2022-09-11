package com.example.employeebackend.controller;

import com.example.employeebackend.entities.Language;
import com.example.employeebackend.services.abs.LanguageService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/language")
@CrossOrigin
public class LanguageController {

    private final LanguageService languageService;

    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @GetMapping
    public ResponseEntity<List<Language>> getAll (){
        List<Language> languages = languageService.getAll();
        return ResponseEntity.ok(languages);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Language> getOneLanguage (@PathVariable(name = "id") Long id){
        return ResponseEntity.ok(languageService.getOneLanguage(id));
    }

    @PostMapping
    public ResponseEntity<Language> createLanguage (@RequestBody Language language){
        Language data = languageService.createLanguage(language);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Language> updateLanguage (@PathVariable(name = "id") Long id,@RequestBody Language language) {
        Language data = languageService.updateLanguage(id, language);
        return new ResponseEntity<>(data,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLanguage (@PathVariable(name = "id") Long id) {
        languageService.deleteLanguage(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
