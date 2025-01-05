package com.example.Farmease.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class State
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer stateid;
    private String state;

    public State()
    {
    }

    public State(Integer stateid, String state, List<City> city1) {
        this.stateid = stateid;
        this.state = state;
        this.city1 = city1;
    }

    public Integer getStateid() {
        return stateid;
    }

    public void setStateid(Integer stateid) {
        this.stateid = stateid;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public List<City> getCity1() {
        return city1;
    }

    public void setCity1(List<City> city1) {
        this.city1 = city1;
    }

    @OneToMany(mappedBy = "state1")
    @JsonIgnore
    private List<City> city1;
}
