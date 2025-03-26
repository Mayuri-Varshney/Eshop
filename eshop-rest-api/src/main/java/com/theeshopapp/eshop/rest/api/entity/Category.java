package com.theeshopapp.eshop.rest.api.entity;




import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    @Column(nullable = false, unique=true)
    private String name;

    private String image;
    @OneToMany(mappedBy = "category",
    cascade = CascadeType.ALL,
    orphanRemoval = true)

    private List<Product> products;

}
