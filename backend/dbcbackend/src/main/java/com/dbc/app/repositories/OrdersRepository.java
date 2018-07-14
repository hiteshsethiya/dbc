package com.dbc.app.repositories;

import com.dbc.app.model.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrdersRepository extends CrudRepository<Order, Long> {
    Optional<Order> getById(Long orderId);
}
