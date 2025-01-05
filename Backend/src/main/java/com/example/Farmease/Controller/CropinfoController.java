package com.example.Farmease.Controller;

//import com.example.Farmease.Entity.Category;
import com.example.Farmease.Entity.Cropinfo;
import com.example.Farmease.Repository.CategoryRepo;
import com.example.Farmease.Repository.CropinfoRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
//import jakarta.persistence.Entity;
//import lombok.Getter;
//import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CropinfoController
{
    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    CropinfoRepo cropinfoRepo;

    /* Add Cropinfo details */
    @PostMapping("/addcropinfo/{categoryid}")
    public ResponseEntity<?> addcropinfo(@PathVariable Integer categoryid, @RequestBody Cropinfo obj)
    {
        var categoryinfo=categoryRepo.findById(categoryid).orElseThrow(()->new RuntimeException("Category id not found"));
        obj.setCategory1(categoryinfo);
        cropinfoRepo.save(obj);
        return new ResponseEntity<>("Crop details added Successfully", HttpStatus.OK);
    }

    /* Get all Cropinfo details */
    @GetMapping("/getallcropinfo")
    public ResponseEntity<?> getallcropinfo()
    {
        List<Cropinfo> cropinfolist=cropinfoRepo.findAll();
        return new ResponseEntity<>(cropinfolist,HttpStatus.OK);
    }

    /* Get all crop info based of categoryid */
    @GetMapping("/getallcropinfooncategory/{categoryid}")
    public ResponseEntity<?> getallcropinfooncategory(@PathVariable Integer categoryid)
    {
        var cateinfo=categoryRepo.findById(categoryid).orElseThrow(()->new RuntimeException("Category id not found"));
        List<Cropinfo> cropinfolist = cropinfoRepo.findByCategory1_categoryid(categoryid); // Assuming you have this method
        if (cropinfolist.isEmpty()) {
            return new ResponseEntity<>("No crops found for that category", HttpStatus.NOT_FOUND);
        }
            return new ResponseEntity<>(cropinfolist, HttpStatus.OK);
        }

        /* Get particular cropdetails based - front end(Findcrop info) */
        @GetMapping("/getcropdetails/{cropinfoid}")
        public ResponseEntity<?> getcropdetails(@PathVariable Integer cropinfoid)
        {
            var cropinfo=cropinfoRepo.findById(cropinfoid).orElseThrow(()->new RuntimeException("Cropinfo id not found"));
            return new ResponseEntity<>(cropinfo, HttpStatus.OK);
        }
}
