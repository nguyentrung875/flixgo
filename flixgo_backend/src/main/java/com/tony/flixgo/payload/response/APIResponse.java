package com.tony.flixgo.payload.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class APIResponse {
    private int statusCode = 200;
    private String message;
    private Object data;
}
