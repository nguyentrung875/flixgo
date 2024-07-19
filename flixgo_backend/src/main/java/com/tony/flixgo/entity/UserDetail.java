package com.tony.flixgo.entity;

import com.tony.flixgo.entity.constantenum.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "user_detail")
@Table(name = "user_detail")
public class UserDetail {
    @Id
    @Column(name = "id_user")
    private String idUser;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id_user")
    private User user;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "dob")
    private LocalDate dob;

    @Enumerated
    @Column(name = "gender", columnDefinition = "enum('F', 'M')")
    private Gender gender;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "avatar")
    private String avatar;
}
