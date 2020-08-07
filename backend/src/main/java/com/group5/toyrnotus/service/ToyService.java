package com.group5.toyrnotus.service;

import com.group5.toyrnotus.entity.Toy;
import com.group5.toyrnotus.repository.ToyRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.jboss.logging.*;

@Service
public class ToyService {
    private final Logger logger = Logger.getLogger(ToyService.class);
    private final ToyRepository toyRepository;

    public ToyService(ToyRepository toyRepository) {
        this.toyRepository = toyRepository;
    }

    private List<String> getAgeSearchWord(int age) {
        // < 1 Toddler 1 --> 2 baby
        if (age < 1) {
            return Collections.singletonList("Toddler");
        } else if (age < 3) {
            return Collections.singletonList("Baby");
        } else if (age < 6) {
            return Collections.singletonList("3_to_5");
        } else if (age < 9)
            return Collections.singletonList("6_to_8");
        else return Collections.singletonList("over8");


    }

    public List<Toy> getAllToysByAgeAndGender(int age, String gender) {
        // 3_to_5  6_to_8 Baby Toddler over8
        List<String> ageKeywords = getAgeSearchWord(age);
        logger.info(ageKeywords);
        return toyRepository.findAllByAgeRangeInAndGender(ageKeywords, gender);
    }
}
