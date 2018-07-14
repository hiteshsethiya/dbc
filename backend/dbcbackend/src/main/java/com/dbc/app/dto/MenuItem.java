package com.dbc.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class MenuItem {

    private Long itemId;
    private String dishFamily;
    private String name;
    private String category;
    private String cuisine;
    private String imageUrl;

    public MenuItem() {}
}
