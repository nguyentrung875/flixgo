package com.tony.flixgo.utils;

import com.tony.flixgo.payload.dto.AuthenDTO;
import com.tony.flixgo.payload.response.TokenResponse;
import com.tony.flixgo.service.AuthenService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.List;

@Component
public class JwtUtils {

    @Value("${jwt.accessKey}")
    private String secretString;

    private long expTime = 10*24*60*60*1000;

    public String generateToken(AuthenDTO authenDTO){
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretString));


        return Jwts.builder()
                .subject(authenDTO.getUsername())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expTime))
                .claim("roles" , authenDTO.getRoles())
                .signWith(key)
                .compact();
    }

    public AuthenDTO decodeToken(String token) {
        Claims claims = this.getClaims(token);

        return AuthenDTO.builder()
                .username(claims.getSubject())
                .roles(claims.get("roles", List.class))
                .build();
    }

    private Claims getClaims(String token) {
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretString));
        return Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
    }
}
