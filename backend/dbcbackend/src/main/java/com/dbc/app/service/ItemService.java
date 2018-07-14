package com.dbc.app.service;

import com.dbc.app.controllers.error.UniqueConstraintViolationException;
import com.dbc.app.model.Item;
import com.dbc.app.model.SwiggyItem;
import com.dbc.app.repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemsRepository itemsRepository;

    @Autowired
    private EntityManager em;

    public void save(Item swiggyItem) throws UniqueConstraintViolationException {
        try {
            itemsRepository.save(swiggyItem);
        }
        catch (DataIntegrityViolationException ex) {
            throw new UniqueConstraintViolationException("Bank Account Already Exists");
        }
    }

    public Optional<Item> getByItemId(Long itemId) {
        Item swiggyItem = itemsRepository.findByItemId(itemId);
        return Optional.ofNullable(swiggyItem);
    }


    public List<Item> getItems(List<Long> itemIds) {
        String queryStr = "SELECT NEW com.dbc.app.model.Item(" +
                "item.id, item.itemId, item.dishFamily, item.name, item.category, item.cuisine, item.imageUrl) " +
                "FROM Item AS item where item.itemId in :inclList";
        TypedQuery<Item> query = em.createQuery(queryStr, Item.class);
        query.setParameter("inclList", itemIds);
        return query.getResultList();
    }
}
