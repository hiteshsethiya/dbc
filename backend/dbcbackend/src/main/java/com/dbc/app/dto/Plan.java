package com.dbc.app.dto;

import com.dbc.app.commons.Constants;
import com.dbc.app.model.Item;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Plan {

    private Constants.MealType mealType;
    private List<Long> itemIds;
    private List<Item> menuItems;

    public Plan() {}

    public Plan(Constants.MealType mealType) {
        this.mealType = mealType;
        this.itemIds = new ArrayList<>();
        this.menuItems = new ArrayList<>();
    }
}