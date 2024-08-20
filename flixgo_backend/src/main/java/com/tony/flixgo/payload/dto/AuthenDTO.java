package com.tony.flixgo.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
public class AuthenDTO {
    private String username;
    private List<String> roles;
}
