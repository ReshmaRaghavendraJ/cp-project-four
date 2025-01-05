package com.example.Farmease.Controller;

import com.example.Farmease.Entity.News;
import com.example.Farmease.Repository.NewsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class NewsController
{
    @Autowired
    NewsRepo newsRepo;

    /* Add News details */
    @PostMapping("/addnews")
    public ResponseEntity<?> addnews(@RequestBody News obj)
    {
        newsRepo.save(obj);
        return new ResponseEntity<>("News added Successfully", HttpStatus.OK);
    }

    /* Get all News details */
    @GetMapping("/getallnews")
    public ResponseEntity<?> getallnews()
    {
        List<News> newsList=newsRepo.findAll();
        return new ResponseEntity<>(newsList,HttpStatus.OK);
    }

}
