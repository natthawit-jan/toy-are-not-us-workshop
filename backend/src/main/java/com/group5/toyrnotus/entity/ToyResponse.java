package com.group5.toyrnotus.entity;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

public class ToyResponse {

    @JsonProperty("toys_all_counts")
    private int toysAllCounts;

    @JsonProperty("toys_shown_page_counts")
    private int toysShownPageCounts;

    @JsonProperty("age_selected")
    private int ageSelected;

    @JsonProperty("gender_selected")
    private String genderSelected;

    private List<Toy> toys;

    public ToyResponse(int toysAllCounts, int toysShownPageCounts, int ageSelected, String genderSelected, List<Toy> toys) {
        this.toysAllCounts = toysAllCounts;
        this.toysShownPageCounts = toysShownPageCounts;
        this.ageSelected = ageSelected;
        this.genderSelected = genderSelected;
        this.toys = toys;
    }

    public ToyResponse() {

    }

    public int getToysAllCounts() {
        return toysAllCounts;
    }

    public void setToysAllCounts(int toysAllCounts) {
        this.toysAllCounts = toysAllCounts;
    }

    public int getToysShownPageCounts() {
        return toysShownPageCounts;
    }

    public void setToysShownPageCounts(int toysShownPageCounts) {
        this.toysShownPageCounts = toysShownPageCounts;
    }

    public int getAgeSelected() {
        return ageSelected;
    }

    public void setAgeSelected(int ageSelected) {
        this.ageSelected = ageSelected;
    }

    public String getGenderSelected() {
        return genderSelected;
    }

    public void setGenderSelected(String genderSelected) {
        this.genderSelected = genderSelected;
    }

    public List<Toy> getToys() {
        return toys;
    }

    public void setToys(List<Toy> toys) {
        this.toys = toys;
    }
}
