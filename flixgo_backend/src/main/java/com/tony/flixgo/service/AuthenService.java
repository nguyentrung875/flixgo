package com.tony.flixgo.service;

import com.tony.flixgo.payload.request.SignInRequest;
import com.tony.flixgo.payload.response.TokenResponse;
import org.springframework.stereotype.Service;

@Service
public interface AuthenService {
    public TokenResponse signin(SignInRequest request);
}
