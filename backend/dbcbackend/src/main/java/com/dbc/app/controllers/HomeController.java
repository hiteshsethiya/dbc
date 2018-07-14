package com.dbc.app.controllers;

import com.dbc.app.controllers.error.UniqueConstraintViolationException;
import com.dbc.app.model.Items;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Controller
public class HomeController {

    @PostMapping(value = "/sample", produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody ResponseEntity saveItems(@RequestBody Items item) throws UniqueConstraintViolationException, JsonProcessingException {
        log.info("Request body - " + new ObjectMapper().writeValueAsString(item));
//        kycService.saveCompany(company);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/items")
    public @ResponseBody ResponseEntity<Items> getItemsById(@PathVariable("id") Long id) {
//        Optional<Company> company  = kycService.findById(id);
//        return company.map(company1 -> new ResponseEntity<>(company1, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}