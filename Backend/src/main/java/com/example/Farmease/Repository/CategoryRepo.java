package com.example.Farmease.Repository;

import com.example.Farmease.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
    boolean existsByCategory(String category);
}
