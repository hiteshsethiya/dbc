package com.dbc.app.service;

import com.dbc.app.commons.Constants;
import com.dbc.app.dto.DayPlan;
import com.dbc.app.dto.Plan;
import com.dbc.app.dto.WeekPlan;
import com.dbc.app.model.Item;
import com.dbc.app.model.UserPlan;
import com.dbc.app.repositories.UserPlanRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class UserPlanService {

    @Autowired
    private UserPlanRepository userPlanRepository;

    @Autowired
    private ItemService itemService;

    public void savePlan(WeekPlan weekPlan) throws JsonProcessingException {

        UserPlan userPlan = userPlanRepository.findUserPlanBySwiggyCustomerId(weekPlan.getSwiggyCustomerId());

        if(userPlan == null) {
            userPlan = new UserPlan();
            userPlan.setSwiggyCustomerId(weekPlan.getSwiggyCustomerId());
        }

        userPlan.setWeekPlan(serialiseWeekPlan(weekPlan));

        userPlanRepository.save(userPlan);
    }

    public WeekPlan getWeekPlan(String swiggyCustomerId) throws IOException {
        UserPlan userPlan = userPlanRepository.findUserPlanBySwiggyCustomerId(swiggyCustomerId);

        WeekPlan weekPlan = createDefaultWeekPlan(swiggyCustomerId);
        if(userPlan == null) {
            return weekPlan;
        }

        WeekPlan dbWeekPlan = deSerialiseWeekPlan(userPlan.getWeekPlan());

        for(DayPlan dayPlan : dbWeekPlan.getDayPlans()) {
            for(DayPlan defDayPlan : weekPlan.getDayPlans()) {

                if(dayPlan.getDay() == defDayPlan.getDay()) {

                    for(int i = 0; i < dayPlan.getPlans().size(); ++i) {
                        Plan plan = dayPlan.getPlans().get(i);

                        Plan defPlan = defDayPlan.getPlans().get(i);

                        if(defPlan.getMealType() == plan.getMealType()) {

                            List<Item> itemList = itemService.getItems(plan.getItemIds());
                            plan.setMenuItems(itemList);
                            plan.getItemIds().clear();

                            defDayPlan.getPlans().set(i, plan);
                        }
                    }
                }
            }
        }

        return weekPlan;
    }

    private WeekPlan createDefaultWeekPlan(String swiggyCustomerId) {
        WeekPlan weekPlan = new WeekPlan();

        List<DayPlan> dayPlanList = new ArrayList<>();

        for (Constants.Days day : Constants.Days.values()) {
            DayPlan dayPlan = new DayPlan(day);
            List<Plan> planList = new ArrayList<>();
            for (Constants.MealType mealType : Constants.MealType.values()) {
                Plan plan = new Plan(mealType);
                planList.add(plan);
            }
            dayPlan.setPlans(planList);
            dayPlanList.add(dayPlan);
        }

        weekPlan.setDayPlans(dayPlanList);
        weekPlan.setSwiggyCustomerId(swiggyCustomerId);

        return weekPlan;
    }

    private String serialiseWeekPlan(WeekPlan weekPlan) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(weekPlan);
    }

    private WeekPlan deSerialiseWeekPlan(String weekPlan) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(weekPlan, WeekPlan.class);
    }
}


