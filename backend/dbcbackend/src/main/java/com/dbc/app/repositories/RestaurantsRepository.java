package com.dbc.app.repositories;

import com.dbc.app.model.Restaurant;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RestaurantsRepository extends CrudRepository<Restaurant, Long> {
    Optional<Restaurant> getById(Long restaurantId);
    Optional<Restaurant> getByName(String name);
}
