package com.dbc.app.controllers.dto;

import com.dbc.app.model.Order;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter @Setter @ToString
public class OrderDTO {

    private String restaurant;
    private String foodType;

    private String userName = "Anuj";
//    @JsonProperty("date-time")
    @JsonDeserialize(using = DateDeserializer.class)
    private Date deliverAt;
    private String note;
}
