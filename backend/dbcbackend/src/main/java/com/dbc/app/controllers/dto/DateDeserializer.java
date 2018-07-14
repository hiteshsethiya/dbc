package com.dbc.app.controllers.dto;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Slf4j
public class DateDeserializer extends JsonDeserializer<Date> {
    @Override
    public Date deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        String dateAsString = jsonParser.getText();
        log.info("Date from Android is {}", dateAsString);
        SimpleDateFormat dateFormat = new SimpleDateFormat("H:m:s");
        try {
            Calendar incoming = Calendar.getInstance();
            incoming.setTime(dateFormat.parse(dateAsString));

            Calendar today = Calendar.getInstance();
            today.set(Calendar.HOUR_OF_DAY, incoming.get(Calendar.HOUR_OF_DAY));
            today.set(Calendar.MINUTE, incoming.get(Calendar.MINUTE));
            today.set(Calendar.SECOND, incoming.get(Calendar.SECOND));
            return today.getTime();
        } catch (ParseException e) {
            log.error("Could not parse date from android {}", dateAsString);
            e.printStackTrace();
        }
        return Calendar.getInstance().getTime();
    }
}
