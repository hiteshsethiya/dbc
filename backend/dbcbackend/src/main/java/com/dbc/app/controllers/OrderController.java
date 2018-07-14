package com.dbc.app.controllers;

import com.dbc.app.clients.FrontendClient;
import com.dbc.app.controllers.dto.OrderDTO;
import com.dbc.app.controllers.error.ErrorDetails;
import com.dbc.app.model.Order;
import com.dbc.app.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@Slf4j
@Controller
public class OrderController {

    @Autowired private OrderService orderService;
    @Autowired private FrontendClient frontendClient;

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

    @GetMapping("/orders/")
    public @ResponseBody
    ResponseEntity<List<Order>> getOrders() {
        return new ResponseEntity<>(this.orderService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/orders", produces = { MediaType.APPLICATION_JSON_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE })
    public @ResponseBody
    ResponseEntity saveItems(@RequestBody OrderDTO orderDTO) throws Exception {
        try{
            log.info("QUOTES K SAATH? {}", orderDTO);
            Order order = this.orderService.getOrderFrom(orderDTO);
            this.orderService.save(order);
            try {
                this.frontendClient.sendNotification(order);
            } catch (Exception e) {
                e.printStackTrace();
            }
            return new ResponseEntity(HttpStatus.CREATED);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return new ResponseEntity<>(
                    new ErrorDetails(Calendar.getInstance().getTime(), e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.toString()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
