package com.tony.flixgo.payload.response;

import lombok.Builder;
import lombok.Data;
import lombok.Setter;

@Data
@Builder
public class TokenResponse {
    private String accessToken;
}
