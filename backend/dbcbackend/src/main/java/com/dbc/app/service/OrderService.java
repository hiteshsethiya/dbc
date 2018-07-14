package com.dbc.app.service;

import com.dbc.app.controllers.error.UniqueConstraintViolationException;
import com.dbc.app.model.Order;
import com.dbc.app.repositories.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {
    @Autowired private OrdersRepository ordersRepository;

//    public void save(SwiggyItem swiggyItem) throws UniqueConstraintViolationException {
//        try {
//            itemsRepository.save(swiggyItem);
//        }
//        catch (DataIntegrityViolationException ex) {
//            throw new UniqueConstraintViolationException("Bank Account Already Exists");
//        }
//    }

    public Optional<Order> getById(Long orderId) {
        return this.ordersRepository.getById(orderId);
    }
}
