package com.dbc.app.service;

import com.dbc.app.dto.WeekPlan;
import com.dbc.app.model.UserPlan;
import com.dbc.app.repositories.UserPlanRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserPlanService {

    @Autowired
    private UserPlanRepository userPlanRepository;

    public void savePlan(WeekPlan weekPlan) throws JsonProcessingException {

        UserPlan userPlan = userPlanRepository.findUserPlanBySwiggyCustomerId(weekPlan.getSwiggyCustomerId());

        if(userPlan == null) {
            userPlan = new UserPlan();
            userPlan.setSwiggyCustomerId(weekPlan.getSwiggyCustomerId());
        }

        userPlan.setWeekPlan(serialiseWeekPlan(weekPlan));

        userPlanRepository.save(userPlan);
    }

    public WeekPlan getWeekPlan(String swiggyCustomerId) {
        UserPlan userPlan = userPlanRepository.findUserPlanBySwiggyCustomerId(swiggyCustomerId);
        if(userPlan == null) {
            return createDefaultWeekPlan();
        }
        return null;
    }

    private WeekPlan createDefaultWeekPlan() {
        WeekPlan weekPlan = new WeekPlan();
        return weekPlan;
    }

    private String serialiseWeekPlan(WeekPlan weekPlan) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(weekPlan);
    }

    private WeekPlan deSerialiseWeekPlan(String weekPlan) {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.convertValue(weekPlan, WeekPlan.class);
    }
}
