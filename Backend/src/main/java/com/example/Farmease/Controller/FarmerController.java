package com.example.Farmease.Controller;

import com.example.Farmease.Entity.Farmer;
import com.example.Farmease.Entity.Feedback;
import com.example.Farmease.Repository.FarmerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")

public class FarmerController {
    @Autowired
    FarmerRepo farmerRepo;

    /* Farmer or User Login Check */
    @GetMapping("/farmerlogincheck/{emailid}/{password}")
    public ResponseEntity<?> farmerlogincheck(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the Farmer by email ID
            Farmer farmerinfo = farmerRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!farmerinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Farmer Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Farmer info if login is successful
                return new ResponseEntity<>(farmerinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    /* Farmer or User Registration */
    @PostMapping("/farmerregister")
    public ResponseEntity<?> farmerregister(@RequestBody Farmer obj) {
        farmerRepo.save(obj);
        return new ResponseEntity<>("Farmer added Successfully", HttpStatus.OK);
    }

    /* Update Farmer or User details */
    @PutMapping("/updateprofile/{farmerid}")
    public ResponseEntity<?> updateprofile(@PathVariable Integer farmerid, @RequestBody Farmer obj) {
        try {
            var farinfo = farmerRepo.findById(farmerid).orElseThrow(() -> new RuntimeException("Farmerid not found"));
            farinfo.setEmailid(obj.getEmailid());
            farinfo.setFarmername(obj.getFarmername());
            farinfo.setPassword(obj.getPassword());
            farinfo.setPhoneno(obj.getPhoneno());
            farmerRepo.save(farinfo);
            return new ResponseEntity<>("Profile Updated Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            if (e.getMessage().contains("Farmer id not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Farmer ID incorrect!");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error: " + e.getMessage());
            }
        }
    }

    /* Get particular farmer details - frontend (update profile) */
    @GetMapping("/getfarmer/{farmerid}")
    public ResponseEntity<?> getfarmer(@PathVariable Integer farmerid)
    {
        var farinfo=farmerRepo.findById(farmerid).orElseThrow(()->new RuntimeException("Farmerid not found "));
        return new ResponseEntity<>(farinfo,HttpStatus.OK);
    }

    /* Get all Farmer details */
    @GetMapping("getallfarmerdetails")
    public ResponseEntity<?> getallfarmerdetails()
    {
        List<Farmer> farmerlist=farmerRepo.findAll();
        return new ResponseEntity<>(farmerlist,HttpStatus.OK);
    }
}
