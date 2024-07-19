package com.tony.flixgo.entity;

import com.tony.flixgo.entity.composite_keys.MovieRatingKey;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "movie_rating")
@Table(name = "movie_rating")
public class MovieRating {
    @EmbeddedId
    MovieRatingKey key;

    @ManyToOne
    @MapsId("idMovie")
    @JoinColumn(name = "id_movie", insertable = false, updatable = false)
    private Movie movie;

    @ManyToOne
    @MapsId("idUser")
    @JoinColumn(name = "id_user", insertable = false, updatable = false)
    private User user;

    @Column(name = "star_rating")
    private String starRating;

    @Column(name = "review_title")
    private int reviewTitle;

    @Column(name = "content")
    private String content;

    @Column(name = "create_time")
    private LocalDateTime createTime;

    @Column(name = "wishlist")
    private boolean wishlist;

    @Column(name = "wacthed")
    private boolean wacthed;
}
