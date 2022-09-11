package com.example.employeebackend.services;

import com.example.employeebackend.entities.Language;
import com.example.employeebackend.exception.LanguageNotFoundExcepiton;
import com.example.employeebackend.repository.LanguageRepository;
import com.example.employeebackend.services.abs.LanguageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class LanguageServiceImp implements LanguageService {

    private final LanguageRepository repository;

    @Override
    public List<Language> getAll() {
        return repository.findAll();
    }

    @Override
    public Language getOneLanguage(Long id) {
        return repository.findById(id).orElseThrow(() -> new LanguageNotFoundExcepiton(id));
    }

    @Override
    public Language createLanguage(Language language) {
        return repository.save(language);
    }

    @Override
    public Language updateLanguage(Long id, Language language) {
        getOneLanguage(id);
        language.setId(id);
        Language data = repository.save(language);
        return data;
    }

    @Override
    public void deleteLanguage(Long id) {
        getOneLanguage(id);
        repository.deleteById(id);
    }

    @Override
    public Set<Language> getLanguagesByIds(List<Long> languageIds) {
        Set<Language> languages = new HashSet<>();
        languageIds.forEach(id -> languages.add(getOneLanguage(id)));
        return languages;
    }
}
