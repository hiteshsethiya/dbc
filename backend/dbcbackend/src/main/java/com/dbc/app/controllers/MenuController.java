package com.dbc.app.controllers;

import com.dbc.app.controllers.error.UniqueConstraintViolationException;
import com.dbc.app.model.Item;
import com.dbc.app.repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Controller
public class MenuController {

    @Autowired
    private ItemsRepository itemsRepository;

    @GetMapping(value = "/menu/all", produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity<Map<String, List<Item>>> get() throws UniqueConstraintViolationException, IOException {

        Map<String, List<Item>> menu = new ConcurrentHashMap<>();
        Iterable<Item> items = itemsRepository.findAll();
        items.forEach(item -> {
            if(item.getCategory() != null) menu.computeIfAbsent(item.getCategory(), k -> new ArrayList<>()).add(item);
        });
        return new ResponseEntity<>(menu, HttpStatus.OK);
    }
}
