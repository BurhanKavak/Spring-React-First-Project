package com.example.employeebackend.services.abs;

import com.example.employeebackend.entities.Language;

import java.util.List;
import java.util.Set;

public interface LanguageService {

    List<Language> getAll();

    Language getOneLanguage (Long id);

    Language createLanguage (Language language);

    Language updateLanguage (Long id, Language language);

    void deleteLanguage(Long id);

    Set<Language> getLanguagesByIds(List<Long> languageIds);
}
