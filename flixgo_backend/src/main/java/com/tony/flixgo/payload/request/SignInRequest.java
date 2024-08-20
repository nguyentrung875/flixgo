package com.tony.flixgo.payload.request;

import lombok.Getter;

@Getter
public class SignInRequest {
    private String username;
    private String password;
}
