package com.dbc.app.repositories;

import com.dbc.app.model.Restaurant;
import com.dbc.app.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsersRepository  extends CrudRepository<User, Long> {
    Optional<User> getById(Long restaurantId);
    Optional<User> getByName(String name);
}