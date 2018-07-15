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

    public void savePlan(WeekPlan weekPlan) throws IOException {

        WeekPlan parentPlan = createDefaultWeekPlan(weekPlan.getSwiggyCustomerId());

        UserPlan userPlan = userPlanRepository.findUserPlanBySwiggyCustomerId(weekPlan.getSwiggyCustomerId());

        if(userPlan == null) {
            userPlan = new UserPlan();
            userPlan.setSwiggyCustomerId(weekPlan.getSwiggyCustomerId());
        } else {
            WeekPlan dbWeekPlan = deSerialiseWeekPlan(userPlan.getWeekPlan());
            merge(parentPlan, dbWeekPlan);
        }

        merge(parentPlan, weekPlan);

        userPlan.setWeekPlan(serialiseWeekPlan(parentPlan));

        userPlanRepository.save(userPlan);
    }

    private void merge(WeekPlan parent, WeekPlan child) {

        for(DayPlan pDayPlan : parent.getDayPlans()) {

            for(DayPlan cDayPlan : child.getDayPlans()) {

                if(pDayPlan.getDay() == cDayPlan.getDay()) {

                    mergePlan(pDayPlan.getPlans(), cDayPlan.getPlans());
                    break;
                }
            }
        }
    }

    private void mergePlan(List<Plan> parentPlan, List<Plan> childPlan) {

        for(int i = 0; i < parentPlan.size(); ++i) {

            Plan pPlan = parentPlan.get(i);

            for(Plan cPlan : childPlan) {

                if(pPlan.getMealType() == cPlan.getMealType()) {

                    parentPlan.set(i, cPlan);
                    break;
                }
            }

        }
    }

    public WeekPlan getWeekPlan(String swiggyCustomerId) throws IOException {
        UserPlan userPlan = userPlanRepository.findUserPlanBySwiggyCustomerId(swiggyCustomerId);

        if(userPlan == null) {
            return createDefaultWeekPlan(swiggyCustomerId);
        }

        WeekPlan dbWeekPlan = deSerialiseWeekPlan(userPlan.getWeekPlan());

        for(int i = 0; i < dbWeekPlan.getDayPlans().size(); ++i) {
            DayPlan dayPlan = dbWeekPlan.getDayPlans().get(i);
            for(Plan plan : dayPlan.getPlans()) {
                if(!plan.getItemIds().isEmpty()) {
                    List<Item> itemList = itemService.getItems(plan.getItemIds());
                    plan.setMenuItems(itemList);
                    plan.getItemIds().clear();
                }
            }
        }

        return dbWeekPlan;
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


