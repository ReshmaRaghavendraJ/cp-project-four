package com.example.Farmease.Controller;

import com.example.Farmease.Entity.Agrioffice;
import com.example.Farmease.Repository.AgriofficeRepo;
import com.example.Farmease.Repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AgriofficeController
{
    @Autowired
    AgriofficeRepo agriofficeRepo;

    @Autowired
    CategoryRepo categoryRepo;

    /* Add Agrioffice details */
    @PostMapping("/addagrioffice/{categoryid}")
    public ResponseEntity<?> addagrioffice(@PathVariable Integer categoryid, @RequestBody Agrioffice obj)
    {
        var categoryinfo=categoryRepo.findById(categoryid).orElseThrow(()->new RuntimeException("Category id not found"));
        obj.setCategory2(categoryinfo);
        agriofficeRepo.save(obj);
        return new ResponseEntity<>("Agriculture office details added Successfully", HttpStatus.OK);
    }

    /* Get all Agrioffice details */
    @GetMapping("/getallagrioffice")
    public ResponseEntity<?> getallagrioffice()
    {
        List<Agrioffice> agriofflist=agriofficeRepo.findAll();
        return new ResponseEntity<>(agriofflist,HttpStatus.OK);
    }

    /* Get Agriculture office based on category -frontend (view Agri office) */
    @GetMapping("getagrioffoncategory/{categoryid}")
    public ResponseEntity<?> getagrioffoncategory(@PathVariable Integer categoryid)
    {
        var cateinfo=categoryRepo.findById(categoryid).orElseThrow(()->new RuntimeException("Category id not found"));
        List<Agrioffice>agrlist=agriofficeRepo.findByCategory2(cateinfo);
        return new ResponseEntity<>(agrlist,HttpStatus.OK);
    }
}
