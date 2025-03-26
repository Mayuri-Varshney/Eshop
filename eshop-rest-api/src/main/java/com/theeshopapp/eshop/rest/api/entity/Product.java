package com.theeshopapp.eshop.rest.api.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    @Column(nullable = false,unique = true)
    private String name;
    private String description;
    private String image;
    private double price;

    @JsonIgnore
    @ManyToOne(
            fetch = FetchType.LAZY
    )
    @JoinColumn(
            name="category_id"
    )
    private Category category;
}
