package com.example.Farmease.Controller;

import com.example.Farmease.Entity.Category;
import com.example.Farmease.Repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CategoryController
{
    @Autowired
    CategoryRepo categoryRepo;

    /* Add Category */
    @PostMapping("/addcategory")
    public ResponseEntity<?> addcategory(@RequestBody Category obj) {
        if (categoryRepo.existsByCategory(obj.getCategory())) {
            return new ResponseEntity<>("Category already added", HttpStatus.CONFLICT);
        } else {
            categoryRepo.save(obj);
            return new ResponseEntity<>("Category added Successfully", HttpStatus.OK);
        }
    }

    /* Display All Category */
    @GetMapping("/getallcategory")
    public ResponseEntity<?> getallcategory()
    {
        List<Category> categorylist=categoryRepo.findAll();
        return new ResponseEntity<>(categorylist,HttpStatus.OK);
    }
}
