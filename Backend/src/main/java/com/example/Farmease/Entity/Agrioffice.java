package com.example.Farmease.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Agrioffice
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer officeid;
    private String officename;
    private String address;
    private String location;
    private String pincode;
    private String mobile;

    public Agrioffice()
    {
    }

    public Agrioffice(Integer officeid, String officename, String address, String location, String pincode, String mobile, Category category2) {
        this.officeid = officeid;
        this.officename = officename;
        this.address = address;
        this.location = location;
        this.pincode = pincode;
        this.mobile = mobile;
        this.category2 = category2;
    }

    public Integer getOfficeid() {
        return officeid;
    }

    public void setOfficeid(Integer officeid) {
        this.officeid = officeid;
    }

    public String getOfficename() {
        return officename;
    }

    public void setOfficename(String officename) {
        this.officename = officename;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Category getCategory2() {
        return category2;
    }

    public void setCategory2(Category category2) {
        this.category2 = category2;
    }

    @ManyToOne
    @JoinColumn(name="categoryid")
    private Category category2;
}
