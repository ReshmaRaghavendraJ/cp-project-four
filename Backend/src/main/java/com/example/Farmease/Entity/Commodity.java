package com.example.Farmease.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
public class Commodity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commodityid;
    private String commodity;
    private Integer price;


    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Kolkata")
    private LocalDateTime commoditydate;

    public Commodity()
    {
    }

    public Commodity(Integer commodityid, String commodity, Integer price, LocalDateTime commoditydate, City city2) {
        this.commodityid = commodityid;
        this.commodity = commodity;
        this.price = price;
        this.commoditydate = commoditydate;
        this.city2 = city2;
    }

    public Integer getCommodityid() {
        return commodityid;
    }

    public void setCommodityid(Integer commodityid) {
        this.commodityid = commodityid;
    }

    public String getCommodity() {
        return commodity;
    }

    public void setCommodity(String commodity) {
        this.commodity = commodity;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public LocalDateTime getCommoditydate() {
        return commoditydate;
    }

    public void setCommoditydate(LocalDateTime commoditydate) {
        this.commoditydate = commoditydate;
    }

    public City getCity2() {
        return city2;
    }

    public void setCity2(City city2) {
        this.city2 = city2;
    }

    @ManyToOne
    @JoinColumn(name="cityid")
    private City city2;
}
