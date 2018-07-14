package com.dbc.app.repositories;


import com.dbc.app.model.Items;
import com.dbc.app.model.UserPlan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPlanRepository extends CrudRepository<UserPlan,Long> {
    UserPlan findUserPlanBySwiggyCustomerId(String swiggyCustomerId);
}
