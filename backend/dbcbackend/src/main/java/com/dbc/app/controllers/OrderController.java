package com.dbc.app.controllers;

import com.dbc.app.controllers.error.ErrorDetails;
import com.dbc.app.model.Order;
import com.dbc.app.model.SwiggyItem;
import com.dbc.app.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Calendar;

@Slf4j
@Controller
public class OrderController {

    @Autowired private OrderService orderService;

    @GetMapping("/orders/{id}")
    public @ResponseBody
    ResponseEntity<Object> getOrderById(@PathVariable("id") Long id) {
        return this.orderService
                .getById(id)
                .map(order -> new ResponseEntity<Object>(order, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(
                        new ErrorDetails(Calendar.getInstance().getTime(), "Order Not Found", HttpStatus.NOT_FOUND.toString()),
                        HttpStatus.NOT_FOUND));
    }
}
