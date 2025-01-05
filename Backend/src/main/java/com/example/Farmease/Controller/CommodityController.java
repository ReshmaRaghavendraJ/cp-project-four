package com.example.Farmease.Controller;

import com.example.Farmease.Entity.Commodity;
import com.example.Farmease.Repository.CityRepo;
import com.example.Farmease.Repository.CommodityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("*")
public class CommodityController
{
    @Autowired
    CommodityRepo commodityRepo;

    @Autowired
    CityRepo cityRepo;

    /* Add Commodity details */
    @PostMapping("/addcommodity/{cityid}")
    public ResponseEntity<?> addcommodity(@PathVariable Integer cityid, @RequestBody Commodity obj)
    {
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("City id not found"));
        obj.setCity2(cityinfo);
        commodityRepo.save(obj);
        return new ResponseEntity<>("Commodity details added Successfully", HttpStatus.OK);
    }

    /* Get that particular commodity details - frontend (view Commodity) */
    @GetMapping("/getcommodity/{cityid}")
    public ResponseEntity<?> getcommodity(@PathVariable Integer cityid)
    {
        var citinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("City id not found"));
    List<Commodity> commoditylist=commodityRepo.findByCity2_cityid(cityid);
        if (commoditylist.isEmpty()) {
            return new ResponseEntity<>("No commodities found for this city", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(commoditylist,HttpStatus.OK);
    }

    /* get all Commodity details */
    @GetMapping("/getallcommodity")
    public ResponseEntity<?> getallcommodity()
    {
        List<Commodity>commodlist=commodityRepo.findAll();
        return new ResponseEntity<>(commodlist,HttpStatus.OK);
    }

    /* Update Commodity details - frontend (Addcommodity) */
    @PutMapping("/updatecommodity/{commodityid}")
    public ResponseEntity<?> updatecommodity(@PathVariable Integer commodityid,@RequestBody Commodity obj)
    {
        var comminfo=commodityRepo.findById(commodityid).orElseThrow(()->new RuntimeException("Commodity id not found"));
        comminfo.setCommodity(obj.getCommodity());
        comminfo.setPrice(obj.getPrice());
        comminfo.setCommoditydate(obj.getCommoditydate());
        commodityRepo.save(comminfo);
        return new ResponseEntity<>("Commodity details updated Successfully",HttpStatus.OK);
    }
}
