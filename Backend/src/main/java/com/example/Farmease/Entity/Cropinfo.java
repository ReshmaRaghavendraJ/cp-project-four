package com.example.Farmease.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Cropinfo
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cropinfoid;
    private String cropname;
    private String soiltype;
    private String seedcategory;
    private String waterirrigation;
    private String dificiencysymptoms;
    private String harvest;
    private String costofcult;
    private String photos;

    public Cropinfo()
    {
    }

    public Cropinfo(Integer cropinfoid, String cropname, String soiltype, String seedcategory, String waterirrigation, String dificiencysymptoms, String harvest, String costofcult, String photos, Category category1) {
        this.cropinfoid = cropinfoid;
        this.cropname = cropname;
        this.soiltype = soiltype;
        this.seedcategory = seedcategory;
        this.waterirrigation = waterirrigation;
        this.dificiencysymptoms = dificiencysymptoms;
        this.harvest = harvest;
        this.costofcult = costofcult;
        this.photos = photos;
        this.category1 = category1;
    }

    public Integer getCropinfoid() {
        return cropinfoid;
    }

    public void setCropinfoid(Integer cropinfoid) {
        this.cropinfoid = cropinfoid;
    }

    public String getCropname() {
        return cropname;
    }

    public void setCropname(String cropname) {
        this.cropname = cropname;
    }

    public String getSoiltype() {
        return soiltype;
    }

    public void setSoiltype(String soiltype) {
        this.soiltype = soiltype;
    }

    public String getSeedcategory() {
        return seedcategory;
    }

    public void setSeedcategory(String seedcategory) {
        this.seedcategory = seedcategory;
    }

    public String getWaterirrigation() {
        return waterirrigation;
    }

    public void setWaterirrigation(String waterirrigation) {
        this.waterirrigation = waterirrigation;
    }

    public String getDificiencysymptoms() {
        return dificiencysymptoms;
    }

    public void setDificiencysymptoms(String dificiencysymptoms) {
        this.dificiencysymptoms = dificiencysymptoms;
    }

    public String getHarvest() {
        return harvest;
    }

    public void setHarvest(String harvest) {
        this.harvest = harvest;
    }

    public String getCostofcult() {
        return costofcult;
    }

    public void setCostofcult(String costofcult) {
        this.costofcult = costofcult;
    }

    public String getPhotos() {
        return photos;
    }

    public void setPhotos(String photos) {
        this.photos = photos;
    }

    public Category getCategory1() {
        return category1;
    }

    public void setCategory1(Category category1) {
        this.category1 = category1;
    }

    @ManyToOne
    @JoinColumn(name="categoryid")
    private Category category1;
}
