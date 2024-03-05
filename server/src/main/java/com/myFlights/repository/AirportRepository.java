package com.myFlights.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myFlights.entity.Airport;

/*
 * A repository is an interface that provides a set of methods for performing CRUD 
 * (Create, Read, Update, Delete) operations on a specific type of entity. Repositories 
 * serve as a bridge between your application code and the underlying data storage, 
 * typically a relational database.
 * It can extend the JpaRepo; within the <> is the targeted entity and type of primary key. 
 * 
 */
@Repository
public interface AirportRepository extends JpaRepository<Airport, Integer> {
    
    // JPA allows to use name queries to the object that it is mapped to.
    Airport findByCode(String code); 
}
