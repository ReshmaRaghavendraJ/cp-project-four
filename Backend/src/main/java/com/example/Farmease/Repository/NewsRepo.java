package com.example.Farmease.Repository;

import com.example.Farmease.Entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepo extends JpaRepository<News,Integer>
{
}
