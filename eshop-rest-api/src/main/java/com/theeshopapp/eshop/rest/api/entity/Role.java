package com.theeshopapp.eshop.rest.api.entity;


import jakarta.persistence.*;

@Entity
@Table(
        name="roles"
)
public class Role {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;

}
