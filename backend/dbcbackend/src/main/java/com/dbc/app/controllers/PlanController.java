package com.dbc.app.controllers;

import com.dbc.app.controllers.error.UniqueConstraintViolationException;
import com.dbc.app.dto.WeekPlan;
import com.dbc.app.service.UserPlanService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Slf4j
@Controller
public class PlanController {

    @Autowired
    private UserPlanService userPlanService;

    @PostMapping(value = "/plan/week", produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity save(@RequestBody WeekPlan weekPlan) throws UniqueConstraintViolationException, IOException {
        log.info("Saving Week plan " + new ObjectMapper().writeValueAsString(weekPlan));
        userPlanService.savePlan(weekPlan);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(value = "/plan/week/{cust_id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity<WeekPlan> get(@PathVariable("cust_id") String swiggyCustomerid) throws UniqueConstraintViolationException, IOException {
        return new ResponseEntity<>(userPlanService.getWeekPlan(swiggyCustomerid), HttpStatus.OK);
    }
}
