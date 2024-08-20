package com.tony.flixgo.payload.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoleDTO {
    private String name;
    private RoleDTO role;
}
