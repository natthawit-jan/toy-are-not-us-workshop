package com.group5.toyrnotus.controller;

import com.group5.toyrnotus.entity.Toy;
import com.group5.toyrnotus.entity.ToyResponse;
import com.group5.toyrnotus.service.ToyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ToyRNotUsController {

    private final ToyService toyService;

    public ToyRNotUsController(ToyService toyService) {
        this.toyService = toyService;
    }

    @GetMapping("/api/v1/toys")
    public ToyResponse getAllToys(
            @RequestParam() int age,
            @RequestParam() String gender) {

        List<Toy> results = toyService.getAllToysByAgeAndGender(age, gender);
        return new ToyResponse(results.size(), results.size(), age, gender, results);
    }


}
