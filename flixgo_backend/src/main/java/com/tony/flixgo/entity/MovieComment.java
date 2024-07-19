package com.tony.flixgo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "movie_comment")
@Table(name = "movie_comment")
public class MovieComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_movie")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @Column(name = "content")
    private String content;

    @Column(name = "id_reply")
    private int idReply;

    @Column(name = "likes")
    private int likes;

    @Column(name = "dislike")
    private int dislike;

    @Column(name = "create_time")
    private LocalDateTime createTime = LocalDateTime.now();


}
