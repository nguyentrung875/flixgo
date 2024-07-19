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
@Entity(name = "users")
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private String id;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private UserDetail userDetail;

    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "create_date")
    private LocalDate createDate = LocalDate.now();

    @ManyToOne
    @JoinColumn(name = "id_role", nullable=false)
    private Role role;

    @OneToMany(mappedBy = "user")
    private Set<MovieComment> comments;

    @OneToMany(mappedBy = "user")
    private Set<MovieRating> movieRatings;

    @OneToMany(mappedBy = "user")
    private Set<SubscriptionUser> subscriptionUserSet;
}
