package com.example.Farmease.Repository;

import com.example.Farmease.Entity.Cropinfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CropinfoRepo extends JpaRepository<Cropinfo,Integer>
{
    List<Cropinfo> findByCategory1_categoryid(Integer categoryid);
}
