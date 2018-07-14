package com.dbc.app.dto;

import com.dbc.app.commons.Constants;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class DayPlan {

    private Constants.Days day;
    private List<Plan> plans;

    public DayPlan() {
    }

    public DayPlan(Constants.Days day) {
        this.day = day;
        this.plans = new ArrayList<>();
    }
}
