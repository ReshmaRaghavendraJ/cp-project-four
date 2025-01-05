package com.example.Farmease.Repository;

import com.example.Farmease.Entity.Farmer;
import com.example.Farmease.Entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer>
{
    boolean existsByFarmer1(Farmer farmer1);
}
