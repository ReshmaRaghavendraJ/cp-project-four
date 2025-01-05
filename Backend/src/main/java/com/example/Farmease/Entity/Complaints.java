package com.example.Farmease.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Complaints
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer complaintid;
    private String cropname;
    private String croptype;
    private String durationcrop;
    private String soiltype;
    private String diseasedetails;
    private String precaution;
    private String symptoms;
    private String photo;
    private String status;
    private String reason;
    private String medicine;
    private String solution;

    public Complaints()
    {
    }

    public Complaints(Integer complaintid, String cropname, String croptype, String durationcrop, String soiltype, String diseasedetails, String precaution, String symptoms, String photo, String status, String reason, String medicine, String solution, Farmer farmer3) {
        this.complaintid = complaintid;
        this.cropname = cropname;
        this.croptype = croptype;
        this.durationcrop = durationcrop;
        this.soiltype = soiltype;
        this.diseasedetails = diseasedetails;
        this.precaution = precaution;
        this.symptoms = symptoms;
        this.photo = photo;
        this.status = status;
        this.reason = reason;
        this.medicine = medicine;
        this.solution = solution;
        this.farmer3 = farmer3;
    }

    public Integer getComplaintid() {
        return complaintid;
    }

    public void setComplaintid(Integer complaintid) {
        this.complaintid = complaintid;
    }

    public String getCropname() {
        return cropname;
    }

    public void setCropname(String cropname) {
        this.cropname = cropname;
    }

    public String getCroptype() {
        return croptype;
    }

    public void setCroptype(String croptype) {
        this.croptype = croptype;
    }

    public String getDurationcrop() {
        return durationcrop;
    }

    public void setDurationcrop(String durationcrop) {
        this.durationcrop = durationcrop;
    }

    public String getSoiltype() {
        return soiltype;
    }

    public void setSoiltype(String soiltype) {
        this.soiltype = soiltype;
    }

    public String getDiseasedetails() {
        return diseasedetails;
    }

    public void setDiseasedetails(String diseasedetails) {
        this.diseasedetails = diseasedetails;
    }

    public String getPrecaution() {
        return precaution;
    }

    public void setPrecaution(String precaution) {
        this.precaution = precaution;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMedicine() {
        return medicine;
    }

    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public Farmer getFarmer3() {
        return farmer3;
    }

    public void setFarmer3(Farmer farmer3) {
        this.farmer3 = farmer3;
    }

    @ManyToOne
    @JoinColumn(name="farmerid")
    private Farmer farmer3;
}
