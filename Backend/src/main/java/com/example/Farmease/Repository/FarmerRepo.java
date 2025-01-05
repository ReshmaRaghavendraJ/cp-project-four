package com.example.Farmease.Repository;

import com.example.Farmease.Entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FarmerRepo extends JpaRepository<Farmer,Integer>
{
    Optional<Farmer> findByEmailid(String emailid);
}
