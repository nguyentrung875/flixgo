package com.tony.flixgo.entity.composite_keys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Embeddable
public class MovieRatingKey implements Serializable {
    @Column(name = "id_movie")
    private int idMovie;

    @Column(name = "id_user")
    private String idUser;
}
