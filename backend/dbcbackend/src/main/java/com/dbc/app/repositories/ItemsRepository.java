package com.dbc.app.repositories;

import com.dbc.app.model.Item;
import com.dbc.app.model.SwiggyItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.NamedQuery;
import java.lang.annotation.Native;
import java.util.List;

@Repository
public interface ItemsRepository extends CrudRepository<Item,Long> {
    Item findByItemId(Long itemId);
    List<Item> findByDishFamily(String name);
}
