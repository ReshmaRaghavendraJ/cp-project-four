package com.example.Farmease.Repository;

import com.example.Farmease.Entity.Complaints;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComplaintsRepo extends JpaRepository<Complaints,Integer>
{
    List<Complaints> findByFarmer3_farmerid(Integer farmerid);
}
