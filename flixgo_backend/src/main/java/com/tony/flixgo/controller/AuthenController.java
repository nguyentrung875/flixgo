package com.tony.flixgo.controller;

import com.tony.flixgo.payload.request.SignInRequest;
import com.tony.flixgo.payload.response.APIResponse;
import com.tony.flixgo.payload.response.TokenResponse;
import com.tony.flixgo.service.AuthenService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Encoders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;

@RestController
@RequestMapping("/authen")
public class AuthenController {

    @Autowired
    private AuthenService authenService;

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SignInRequest request){

        TokenResponse tokenResponse = authenService.signin(request);

        APIResponse apiResponse = APIResponse.builder().data(tokenResponse).build();

        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
