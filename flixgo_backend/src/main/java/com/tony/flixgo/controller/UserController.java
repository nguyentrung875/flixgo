package com.tony.flixgo.controller;

import jakarta.persistence.Entity;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public ResponseEntity<?> getAllUser(){

        return new ResponseEntity<>("Get ALl User", HttpStatus.OK);
    }
}
