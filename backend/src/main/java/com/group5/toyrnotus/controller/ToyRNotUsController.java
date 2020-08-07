package com.group5.toyrnotus.controller;
import com.group5.toyrnotus.entity.Toy;
import com.group5.toyrnotus.entity.ToyResponse;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ToyRNotUsController {


    @GetMapping("/api/v1/toys")
    public ToyResponse getAllToys(
            @RequestParam() int age,
            @RequestParam() String gender) {

        List<Toy> toys = new ArrayList<>();
        toys.add(new Toy("Scrabble", "over8", "Neutral", 19.95, true, "Geektoys"));

        return new ToyResponse(10, 10, age, gender, toys);
    }


}
