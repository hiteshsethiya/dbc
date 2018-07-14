package com.dbc.app.repositories;

import com.dbc.app.model.SwiggyItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends CrudRepository<SwiggyItem,Long> {
    SwiggyItem findByItemId(Long itemId);
}
