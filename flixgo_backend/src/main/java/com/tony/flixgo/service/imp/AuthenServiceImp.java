package com.tony.flixgo.service.imp;

import com.tony.flixgo.payload.dto.AuthenDTO;
import com.tony.flixgo.payload.request.SignInRequest;
import com.tony.flixgo.payload.response.TokenResponse;
import com.tony.flixgo.service.AuthenService;
import com.tony.flixgo.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;

@Service
public class AuthenServiceImp implements AuthenService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    public TokenResponse signin(SignInRequest request) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());

        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        var roles = authentication.getAuthorities().stream().map(item -> item.getAuthority()).toList();

        AuthenDTO authenDTO = AuthenDTO.builder()
                .username(request.getUsername())
                .roles(roles)
                .build();

        String token = jwtUtils.generateToken(authenDTO);

        return TokenResponse.builder()
                .accessToken(token)
                .build();
    }
}
