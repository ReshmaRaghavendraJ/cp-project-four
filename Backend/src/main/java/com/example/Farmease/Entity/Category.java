package com.example.Farmease.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Category
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryid;
    private String category;
    private String pic;

    public Category()
    {
    }

    public Category(Integer categoryid, String category, String pic, List<Cropinfo> cropinfo1, List<Agrioffice> agrioffice1) {
        this.categoryid = categoryid;
        this.category = category;
        this.pic = pic;
        this.cropinfo1 = cropinfo1;
        this.agrioffice1 = agrioffice1;
    }

    public Integer getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(Integer categoryid) {
        this.categoryid = categoryid;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public List<Cropinfo> getCropinfo1() {
        return cropinfo1;
    }

    public void setCropinfo1(List<Cropinfo> cropinfo1) {
        this.cropinfo1 = cropinfo1;
    }

    public List<Agrioffice> getAgrioffice1() {
        return agrioffice1;
    }

    public void setAgrioffice1(List<Agrioffice> agrioffice1) {
        this.agrioffice1 = agrioffice1;
    }

    @OneToMany(mappedBy = "category1")
    @JsonIgnore
    private List <Cropinfo> cropinfo1;

    @OneToMany(mappedBy = "category2")
    @JsonIgnore
    private List<Agrioffice> agrioffice1;
}
