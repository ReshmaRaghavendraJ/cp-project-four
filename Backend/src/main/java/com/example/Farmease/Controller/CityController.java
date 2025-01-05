package com.example.Farmease.Controller;

import com.example.Farmease.Entity.City;
import com.example.Farmease.Repository.CityRepo;
import com.example.Farmease.Repository.StateRepo;
import lombok.experimental.PackagePrivate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CityController
{
    @Autowired
    CityRepo cityRepo;

    @Autowired
    StateRepo stateRepo;

    /* Add City based on Stateid */
    @PostMapping("/addcity/{stateid}")
    public ResponseEntity<?> addcity(@PathVariable Integer stateid, @RequestBody City obj)
    {
        var stateinfo=stateRepo.findById(stateid).orElseThrow(()->new RuntimeException("State id not found"));
        obj.setState1(stateinfo);
        cityRepo.save(obj);
        return new ResponseEntity<>("City added Successfully", HttpStatus.OK);
    }

    /* Get all city details */
    @GetMapping("/getallcity")
    public ResponseEntity<?> getallcity()
    {
        List<City> citylist=cityRepo.findAll();
        return new ResponseEntity<>(citylist,HttpStatus.OK);
    }
}
