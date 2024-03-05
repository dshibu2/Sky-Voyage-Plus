package com.myFlights.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/*
 * In Spring, an "entity" typically refers to a POJO (Plain Old Java Object) class 
 * that represents a persistent data structure, usually mapped to a database table. 
 * An entity class in Spring often corresponds to a table in a relational database, 
 * where each instance of the entity represents a row in the table.
 * An "entity" represents a persistent data structure and is typically mapped to a 
 * database table. A "table" in Spring refers to a collection of related data stored 
 * in a structured format, usually in a relational database, and is often associated 
 * with an entity class.
 */

@Entity
@Table(name="Airports")
public class Airport {

/*
* In Spring and JPA (Java Persistence API), the @Id and @GeneratedValue annotations 
* are used to define the primary key (ID) column of an entity class and specify 
* how its values are automatically generated.
* Each entity class must have exactly one field or property annotated with @Id.
* 
*/

    // primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Airport_id; 

    // other columns
    @Column(name = "Code_name")
    private String code;

    @Column(name = "Name")
    private String longName;
    
    @Column(name = "Description")
    private String description;

    @Column(name = "Zipcode")
    private String zip;

    @Column(name = "State")
    private String state;

    @Column(name = "City")
    private String city;

    // getters and setters
    public Integer getAirport_id() {
        return Airport_id;
    }

    public void setAirport_id(Integer airport_id) {
        Airport_id = airport_id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLongName() {
        return longName;
    }

    public void setLongName(String longName) {
        this.longName = longName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

   
    
}
