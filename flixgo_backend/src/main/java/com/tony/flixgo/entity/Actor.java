package com.tony.flixgo.entity;

import com.tony.flixgo.entity.constantenum.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "actor")
@Table(name = "actor")
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Enumerated
    @Column(name = "gender", columnDefinition = "enum('F', 'M')")
    private Gender gender;

    @Column(name = "avatar")
    private String avatar;

    @ManyToMany
    @JoinTable(
            name = "movie_actor",
            joinColumns = @JoinColumn(name = "id_actor"),
            inverseJoinColumns = @JoinColumn(name = "id_movie"))
    private Set<Movie> movies;

}
