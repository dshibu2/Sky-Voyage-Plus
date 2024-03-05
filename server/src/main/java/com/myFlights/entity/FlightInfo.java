package com.myFlights.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// mapping the entity FlightInfo.java to the table in MySQL FlightInfo
@Entity
@Table(name="FlightInfo")
public class FlightInfo {

    // primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Flight_id; 

    // other columns
    @Column(name = "Origin_code")
    private String originCode;

    @Column(name = "Destination_code")
    private String destCode;
    
    @Column(name = "Flight_date")
    private String date;

    @Column(name = "Time_dept")
    private String timeDept;

    @Column(name = "Amount")
    private String cost;

     // getters and setters
    public Integer getFlight_id() {
        return Flight_id;
    }

    public void setFlight_id(Integer flight_id) {
        Flight_id = flight_id;
    }

    public String getOriginCode() {
        return originCode;
    }

    public void setOriginCode(String originCode) {
        this.originCode = originCode;
    }

    public String getDestCode() {
        return destCode;
    }

    public void setDestCode(String destCode) {
        this.destCode = destCode;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTimeDept() {
        return timeDept;
    }

    public void setTimeDept(String timeDept) {
        this.timeDept = timeDept;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

   
    
    
}
