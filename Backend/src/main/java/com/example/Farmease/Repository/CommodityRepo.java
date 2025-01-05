package com.example.Farmease.Repository;

import com.example.Farmease.Entity.Commodity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommodityRepo extends JpaRepository<Commodity,Integer> {
    List<Commodity> findByCity2_cityid(Integer cityId);
}
