package com.example.Farmease.Repository;

import com.example.Farmease.Entity.Agrioffice;
import com.example.Farmease.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgriofficeRepo extends JpaRepository<Agrioffice,Integer>
{
    List<Agrioffice> findByCategory2(Category cateinfo);
}
