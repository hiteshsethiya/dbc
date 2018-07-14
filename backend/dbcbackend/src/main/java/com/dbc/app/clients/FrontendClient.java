package com.dbc.app.clients;

import com.dbc.app.model.Order;
import com.dbc.app.model.Restaurant;
import com.google.common.collect.Maps;
import jdk.nashorn.internal.runtime.options.Option;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
@Slf4j
public class FrontendClient {
    @Autowired private RestTemplate restTemplate;
    @Autowired private Environment environment;

    public void sendNotification(Order order) {
        String baseUrl = environment.getProperty("frontend.host");
        log.info("Frontend base URL {}", baseUrl);

        String path = "/hyperapp-46652/us-central1/api/notifications";
        log.info("Frontend client path {}", path);

        String url = baseUrl + path;

        Map<String, Object> frontendRequest = new HashMap<>();
        frontendRequest.put("title", "New " + order.getFoodType());
        Map<String, Object> options = new HashMap<>();
        options.put("body", "New " + order.getFoodType() + " from " + Optional.ofNullable(order.getRestaurant())
                .map(Restaurant::getName)
                .orElse("unknown restaurantName"));
        options.put("data", Collections.singletonMap("id", 2));
        frontendRequest.put("options", options);

        log.info("The request being made is {}", frontendRequest);
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-knows-nothing", "jon");

        HttpEntity request = new HttpEntity<Map>(frontendRequest, headers);

        Map<String, Object> response = restTemplate.postForObject(url, request, Map.class);
        log.info("Response from frontend client is {}", response);
    }
}
