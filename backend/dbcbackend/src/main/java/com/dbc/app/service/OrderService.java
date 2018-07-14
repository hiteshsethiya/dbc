package com.dbc.app.service;

import com.dbc.app.controllers.dto.OrderDTO;
import com.dbc.app.dto.Plan;
import com.dbc.app.dto.WeekPlan;
import com.dbc.app.model.Item;
import com.dbc.app.model.Order;
import com.dbc.app.model.Restaurant;
import com.dbc.app.model.User;
import com.dbc.app.repositories.ItemsRepository;
import com.dbc.app.repositories.OrdersRepository;
import com.dbc.app.repositories.RestaurantsRepository;
import com.dbc.app.repositories.UsersRepository;
import com.google.common.collect.Sets;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service @Slf4j
public class OrderService {
    @Autowired private OrdersRepository ordersRepository;
    @Autowired private RestaurantsRepository restaurantsRepository;
    @Autowired private UsersRepository usersRepository;
    @Autowired private ItemsRepository itemsRepository;
    @Autowired private UserPlanService userPlanService;

    @Getter @Setter @AllArgsConstructor
    private class DiffHolder {
        int diff;
        int timing;
    }
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
    public Order getOrderFrom(OrderDTO orderDTO) throws IOException {
        log.info("Order DTO {}", orderDTO);
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

        if(orderDTO.getDeliverAt() == null) {
            if(orderDTO.getFoodType() != null) {
                int typeIndex = Order.Type.valueOf(orderDTO.getFoodType().toUpperCase()).ordinal();
                int hourOfDay = Order.timings.get(typeIndex);
                log.info("housr of {}", hourOfDay);
                Calendar now = Calendar.getInstance();
                now.set(Calendar.HOUR_OF_DAY, hourOfDay);
                orderDTO.setDeliverAt(now.getTime());
            } else {
                orderDTO.setDeliverAt(Calendar.getInstance().getTime());
            }
        }

        if(orderDTO.getFoodType() == null) {
            Calendar deliverAt = Calendar.getInstance();
            deliverAt.setTime(orderDTO.getDeliverAt());

            int hour = deliverAt.get(Calendar.HOUR_OF_DAY);
            int nearestTiming = Order.timings.stream().map(timing -> new DiffHolder(Math.abs(hour - timing), timing))
                    .min(Comparator.comparingInt(DiffHolder::getDiff)).get().getTiming();
            int nearestTimingIndex = Order.timings.indexOf(nearestTiming);
            orderDTO.setFoodType(Order.Type.values()[nearestTimingIndex].toString());
        }

        Set<Item> items = Sets.newHashSet();
        if(orderDTO.getItem() == null) {
            WeekPlan weekPlan = this.userPlanService.getWeekPlan(user.getId().toString());
            Calendar deliverCal = Calendar.getInstance();
            deliverCal.setTime(orderDTO.getDeliverAt());
            items = weekPlan.getDayPlans().stream().filter(dayPlan -> {
                log.info("Day? {}", dayPlan.getDay().ordinal());
                return (dayPlan.getDay().ordinal() + 1) == deliverCal.get(Calendar.DAY_OF_WEEK);
            }).map(dayPlan -> {
                return dayPlan.getPlans().stream().filter(plan -> plan.getMealType().toString().toLowerCase()
                        .equals(orderDTO.getFoodType().toLowerCase()))
                        .findFirst().map(d -> d.getMenuItems().get(0)).orElse(null);
            }).filter(Objects::nonNull).collect(Collectors.toSet());
        } else {
            List<Item> allItems = this.itemsRepository.findByDishFamily(orderDTO.getItem());
            if(allItems!=null && !allItems.isEmpty()) {
                items.add(allItems.get(0));
            }
        }

        log.info("After processing {}", orderDTO);
        Order order = new Order();
        order.setRestaurant(restaurant);
        order.setUser(user);
        order.setDeliverOn(orderDTO.getDeliverAt());
        order.setNote(orderDTO.getNote());
        order.setItems(items);

        String foodType = orderDTO.getFoodType();
        order.setFoodType(Order.Type.valueOf(foodType.toUpperCase()));

        return order;
    }
}
