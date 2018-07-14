package com.dbc.app.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "swiggy_items")
@Getter @Setter
@Deprecated
public class SwiggyItem {

    /**
     * IDENTITY is used for SQL servers.
     * AUTO is used for MySQL servers.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long itemId;
    private String dishFamily;
    private String category;
    private String cuisine;

}