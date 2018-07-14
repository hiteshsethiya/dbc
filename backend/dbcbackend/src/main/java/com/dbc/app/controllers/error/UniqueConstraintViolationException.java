package com.dbc.app.controllers.error;

public class UniqueConstraintViolationException extends RuntimeException{

    public UniqueConstraintViolationException(String ex){
        super(ex);
    }
}
