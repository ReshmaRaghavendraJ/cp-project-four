package com.example.Farmease.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Feedback
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer feedbackid;
    private String feedback;

    public Feedback()
    {
    }

    public Feedback(Integer feedbackid, String feedback, Farmer farmer1) {
        this.feedbackid = feedbackid;
        this.feedback = feedback;
        this.farmer1 = farmer1;
    }

    public Integer getFeedbackid() {
        return feedbackid;
    }

    public void setFeedbackid(Integer feedbackid) {
        this.feedbackid = feedbackid;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }


    public Farmer getFarmer1() {
        return farmer1;
    }

    public void setFarmer1(Farmer farmer1) {
        this.farmer1 = farmer1;
    }

    @ManyToOne
    @JoinColumn(name="farmerid")
    private Farmer farmer1;
}
