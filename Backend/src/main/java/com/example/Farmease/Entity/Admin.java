package com.example.Farmease.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Admin
{
    @Id
    private Integer adminid;
    private String password;
    private String emailid;
    private String adminname;

    public Admin() {
    }

    public Admin(Integer adminid, String password, String emailid, String adminname) {
        this.adminid = adminid;
        this.password = password;
        this.emailid = emailid;
        this.adminname = adminname;
    }

    public Integer getAdminid() {
        return adminid;
    }

    public void setAdminid(Integer adminid) {
        this.adminid = adminid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }
}
