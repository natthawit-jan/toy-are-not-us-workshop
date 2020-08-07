package com.group5.toyrnotus.entity;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "toy")
public class Toy {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "toy_name")
    @JsonProperty("toy_name")
    private String name;

    @Column(name = "age_range")
    @JsonProperty("age_range")
    private String ageRange;

    private String gender;
    private double price;
    private boolean availability;
    private String brand;

    public Toy(String name, String ageRange, String gender, double price, boolean availability, String brand) {
        this.name = name;
        this.ageRange = ageRange;
        this.gender = gender;
        this.price = price;
        this.availability = availability;
        this.brand = brand;
    }

    public Toy() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAgeRange() {
        return ageRange;
    }

    public void setAgeRange(String ageRange) {
        this.ageRange = ageRange;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}
