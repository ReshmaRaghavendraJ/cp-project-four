package com.example.Farmease.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
public class News
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer newsid;
    private String newstopic;
    private String content;

    @JsonFormat(pattern = "dd-MM-yyyy hh:mm a", timezone = "Asia/Kolkata")
    private LocalDateTime newsdate;

    public News()
    {
    }

    public News(Integer newsid, String newstopic, String content, LocalDateTime newsdate) {
        this.newsid = newsid;
        this.newstopic = newstopic;
        this.content = content;
        this.newsdate = newsdate;
    }

    public Integer getNewsid() {
        return newsid;
    }

    public void setNewsid(Integer newsid) {
        this.newsid = newsid;
    }

    public String getNewstopic() {
        return newstopic;
    }

    public void setNewstopic(String newstopic) {
        this.newstopic = newstopic;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getNewsdate() {
        return newsdate;
    }

    public void setNewsdate(LocalDateTime newsdate) {
        this.newsdate = newsdate;
    }
}
