package com.example.Farmease.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class City
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cityid;
    private String city;

    public City()
    {
    }

    public City(Integer cityid, String city, State state1, List<Commodity> commodity1) {
        this.cityid = cityid;
        this.city = city;
        this.state1 = state1;
        this.commodity1 = commodity1;
    }

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public State getState1() {
        return state1;
    }

    public void setState1(State state1) {
        this.state1 = state1;
    }

    public List<Commodity> getCommodity1() {
        return commodity1;
    }

    public void setCommodity1(List<Commodity> commodity1) {
        this.commodity1 = commodity1;
    }

    @ManyToOne
    @JoinColumn(name="stateid")
    private State state1;

    @OneToMany(mappedBy = "city2")
    @JsonIgnore
    private List<Commodity> commodity1;

}
