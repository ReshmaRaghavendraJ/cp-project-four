package com.example.Farmease.Controller;

import com.example.Farmease.Entity.Feedback;
import com.example.Farmease.Repository.FarmerRepo;
import com.example.Farmease.Repository.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class FeedbackController
{
    @Autowired
    FeedbackRepo feedbackRepo;

    @Autowired
    FarmerRepo farmerRepo;

    /* Add Feedback */
    @PostMapping("/addfeedback/{farmerid}")
    public ResponseEntity<?> addfeedback(@PathVariable Integer farmerid, @RequestBody Feedback obj)
    {
        var farmerinfo=farmerRepo.findById(farmerid).orElseThrow(()->new RuntimeException("Farmerid not found"));
        if(feedbackRepo.existsByFarmer1(farmerinfo))
        {
            return new ResponseEntity<>("Feedback already posted by the Farmer",HttpStatus.CONFLICT);
        }
        obj.setFarmer1(farmerinfo);
        feedbackRepo.save(obj);
        return new ResponseEntity<>("Feedback posted Successfully", HttpStatus.OK);
    }

    /* Get all feedback details */
    @GetMapping("getallfeedback")
    public ResponseEntity<?> getallfeedback()
    {
        List<Feedback> feedlist=feedbackRepo.findAll();
        return new ResponseEntity<>(feedlist,HttpStatus.OK);
    }
}
