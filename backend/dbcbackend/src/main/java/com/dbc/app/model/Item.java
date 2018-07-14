package com.dbc.app.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "items")
@Getter @Setter
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long itemId;
    private String dishFamily;
    private String name;
    private String category;
    private String cuisine;
    private String imageUrl;

    public Item() {}

    public Item(Long id, Long itemId, String dishFamily, String name, String category, String cuisine, String imageUrl) {
        this.id = id;
        this.itemId = itemId;
        this.dishFamily = dishFamily;
        this.name = name;
        this.category = category;
        this.cuisine = cuisine;
        this.imageUrl = imageUrl;
    }
}
