package com.example.Farmease.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class Farmer
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer farmerid;
    private String farmername;
    private String password;
    private String phoneno;
    private String emailid;

    public Farmer()
    {
    }

    public Farmer(Integer farmerid, String farmername, String password, String phoneno, String emailid, List<Feedback> feedback1, List<Complaints> complaints3) {
        this.farmerid = farmerid;
        this.farmername = farmername;
        this.password = password;
        this.phoneno = phoneno;
        this.emailid = emailid;
        this.feedback1 = feedback1;
        this.complaints3 = complaints3;
    }

    public Integer getFarmerid() {
        return farmerid;
    }

    public void setFarmerid(Integer farmerid) {
        this.farmerid = farmerid;
    }

    public String getFarmername() {
        return farmername;
    }

    public void setFarmername(String farmername) {
        this.farmername = farmername;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneno() {
        return phoneno;
    }

    public void setPhoneno(String phoneno) {
        this.phoneno = phoneno;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public List<Feedback> getFeedback1() {
        return feedback1;
    }

    public void setFeedback1(List<Feedback> feedback1) {
        this.feedback1 = feedback1;
    }

    public List<Complaints> getComplaints3() {
        return complaints3;
    }

    public void setComplaints3(List<Complaints> complaints3) {
        this.complaints3 = complaints3;
    }

    @OneToMany(mappedBy = "farmer1")
    @JsonIgnore
    private List<Feedback> feedback1;

    @OneToMany(mappedBy = "farmer3")
    @JsonIgnore
    private List<Complaints> complaints3;

}
