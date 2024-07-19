package com.tony.flixgo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "movie")
@Table(name = "movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "subtitle")
    private String subTitle;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "description")
    private String description;

    @Column(name = "age_limit")
    private int ageLimit;

    @Column(name = "duration")
    private int duration;

    @Column(name = "views")
    private int views;

    @Column(name = "status")
    private String status;

    @Column(name = "imdb")
    private int imdb;

    @Column(name = "poster_img")
    private String posterImg;

    @Column(name = "trailer_link")
    private String trailerLink;

    @Column(name = "movie_link")
    private String movieLink;

    @Column(name = "id_quality")
    private int idQuality;

    @ManyToMany(mappedBy = "movies")
    private Set<Country> countries;

    @ManyToMany(mappedBy = "movies")
    private Set<Language> languages;

    @ManyToMany(mappedBy = "movies")
    private Set<Actor> actors;

    @ManyToMany(mappedBy = "movies")
    private Set<Genre> genres;

    @ManyToMany(mappedBy = "movies")
    private Set<Director> directors;

    @ManyToOne
    @JoinColumn(name = "id_quality", insertable = false, updatable = false)
    private Quality quality;

    @OneToMany(mappedBy = "movie")
    private Set<MovieComment> comments;

    @OneToMany(mappedBy = "movie")
    private Set<MovieRating> movieRatings;

}
