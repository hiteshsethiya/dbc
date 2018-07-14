package com.dbc.app.service;

import com.dbc.app.controllers.dto.OrderDTO;
import com.dbc.app.model.Order;
import com.dbc.app.model.Restaurant;
import com.dbc.app.model.User;
import com.dbc.app.repositories.OrdersRepository;
import com.dbc.app.repositories.RestaurantsRepository;
import com.dbc.app.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Autowired private OrdersRepository ordersRepository;
    @Autowired private RestaurantsRepository restaurantsRepository;
    @Autowired private UsersRepository usersRepository;

    public void save(Order order) throws Exception {
        try {
            order.setCreatedAt(Calendar.getInstance().getTime());
            order.setUpdatedAt(Calendar.getInstance().getTime());
            ordersRepository.save(order);
        }
        catch (Exception ex) {
            throw new Exception("Failed to create order");
        }
    }

    public List<Order> findAll() {
        return ((List<Order>) this.ordersRepository.findAll())
                .stream()
                .sorted((o1, o2) -> o2.getCreatedAt().compareTo(o1.getCreatedAt()))
                .collect(Collectors.toList());
    }

    public Optional<Order> getById(Long orderId) {
        return this.ordersRepository.getById(orderId);
    }

    @Transactional
    public Order getOrderFrom(OrderDTO orderDTO) {
        String restaurantName = orderDTO.getRestaurantName();

        User user = null;
        String userName = orderDTO.getUserName();
        if(userName != null) {
            user = this.usersRepository.getByName(userName).orElse(null);
        }

        Restaurant restaurant = null;
        if(restaurantName != null) {
            restaurant = this.restaurantsRepository.getByName(restaurantName).orElse(null);
        }

        Order order = new Order();
        order.setRestaurant(restaurant);
        order.setUser(user);
        order.setDeliverOn(orderDTO.getDeliverAt());
        order.setNote(orderDTO.getNote());

        String foodType = orderDTO.getFoodType();
        order.setFoodType(Order.Type.valueOf(foodType.toUpperCase()));

        return order;
    }
}
