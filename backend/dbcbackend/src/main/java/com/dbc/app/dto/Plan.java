package com.dbc.app.dto;

import com.dbc.app.commons.Constants;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Plan {

    private Constants.MealType mealType;
    private List<String> itemIds;
    private List<MenuItem> menuItems;

    public Plan() {}

    public Plan(Constants.MealType mealType) {
        this.mealType = mealType;
        this.menuItems = new ArrayList<>();
    }
}