package com.dbc.app.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "items")
@Getter @Setter
public class Items {

    /**
     * IDENTITY is used for SQL servers.
     * AUTO is used for MySQL servers.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long itemId;
    private String dishFamily;
    private String category;
    private String cuisine;

}