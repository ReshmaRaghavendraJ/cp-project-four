package com.example.Farmease.Controller;

import com.example.Farmease.Entity.State;
import com.example.Farmease.Repository.StateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class StateController
{
    @Autowired
    StateRepo stateRepo;

    /* Add State details */
    @PostMapping("addstate")
    public ResponseEntity<?> addstate(@RequestBody State obj)
    {
        stateRepo.save(obj);
        return new ResponseEntity<>("State added Successfully", HttpStatus.OK);
    }

    /* Get all State details */
    @GetMapping("/getallstate")
    public ResponseEntity<?> getallstate()
    {
        List<State> stateList=stateRepo.findAll();
        return new ResponseEntity<>(stateList,HttpStatus.OK);
    }
}
