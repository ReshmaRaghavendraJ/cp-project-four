package com.example.Farmease.Controller;

import com.example.Farmease.Entity.Complaints;
import com.example.Farmease.Repository.ComplaintsRepo;
import com.example.Farmease.Repository.FarmerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ComplaintsController
{
    @Autowired
    ComplaintsRepo complaintsRepo;

    @Autowired
    FarmerRepo farmerRepo;

    /* add complaints details */
    @PostMapping("/addcomplaints/{farmerid}")
    public ResponseEntity<?> addcomplaints(@PathVariable Integer farmerid,@RequestBody Complaints obj)
    {
        var farinfo=farmerRepo.findById(farmerid).orElseThrow(()->new RuntimeException("Farmerid not found"));
        obj.setFarmer3(farinfo);
        var compinfo=complaintsRepo.save(obj);
        return new ResponseEntity<>("Complaints posted Successfully", HttpStatus.OK);
    }

    /* View All Complaints Posted */
    @GetMapping("/getallpostedcomplaints")
    public ResponseEntity<?> getallpostedcomplaints()
    {
        List<Complaints> complaintsList=complaintsRepo.findAll();
        return new ResponseEntity<>(complaintsList,HttpStatus.OK);
    }

    /* Update Complaints - Frontend (Solve Complaints) */
    @PutMapping("/Updatesolution/{complaintid}")
    public ResponseEntity<?> Updatesolution(@PathVariable Integer complaintid,@RequestBody Complaints obj)
    {
        var compinfo=complaintsRepo.findById(complaintid).orElseThrow(()->new RuntimeException("Complaint id not found"));
        compinfo.setMedicine(obj.getMedicine());
        compinfo.setReason(obj.getReason());
        compinfo.setSolution(obj.getSolution());
        compinfo.setStatus(obj.getStatus());
        complaintsRepo.save(compinfo);
        return new ResponseEntity<>("Solution Updated Successfully",HttpStatus.OK);
    }

    /* display particular farmers complaint status */
    @GetMapping("/getcompstatus/{farmerid}")
    public ResponseEntity<?> getcompstatus(@PathVariable Integer farmerid)
    {
        var farmerinfo=farmerRepo.findById(farmerid).orElseThrow(()->new RuntimeException("Farmerid not found"));
        List<Complaints>comlist=complaintsRepo.findByFarmer3_farmerid(farmerid);
        return new ResponseEntity<>(comlist,HttpStatus.OK);
    }

    /* Get particular farmer posted complaints details - Frontend (postcomplaints) */
    @GetMapping("getcomplaintsdetails/{farmerid}")
    public ResponseEntity<?> getcomplaintsdetails(@PathVariable Integer farmerid)
    {
        var farinfo=farmerRepo.findById(farmerid).orElseThrow(()->new RuntimeException("Farmer id not found"));
        List<Complaints>complaintlist=complaintsRepo.findByFarmer3_farmerid(farmerid);
        return new ResponseEntity<>(complaintlist,HttpStatus.OK);
    }
}
