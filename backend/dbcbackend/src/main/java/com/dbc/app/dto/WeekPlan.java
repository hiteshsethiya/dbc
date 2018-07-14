package com.dbc.app.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class WeekPlan {

    private String swiggyCustomerId;
    private List<DayPlan> dayPlans;

    public WeekPlan() {
        this.dayPlans = new ArrayList<>();
    }
}