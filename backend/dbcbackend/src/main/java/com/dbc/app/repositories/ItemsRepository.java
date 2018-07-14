package com.dbc.app.repositories;

import com.dbc.app.model.Items;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends CrudRepository<Items,Long> {
    Items findByItemId(Long itemId);
}
