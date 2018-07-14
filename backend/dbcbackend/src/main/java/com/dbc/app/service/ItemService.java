package com.dbc.app.service;

import com.dbc.app.controllers.error.UniqueConstraintViolationException;
import com.dbc.app.model.Items;
import com.dbc.app.repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.Optional;
import javax.persistence.EntityManager;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private EntityManager entityManager;

    @Autowired
    private ItemsRepository itemsRepository;

    public void save(Items items) throws UniqueConstraintViolationException {
        try {
            itemsRepository.save(items);
        }
        catch (DataIntegrityViolationException ex) {
            throw new UniqueConstraintViolationException("Bank Account Already Exists");
        }
    }

    public Optional<Items> getByItemId(Long itemId) {
        Items item = itemsRepository.findByItemId(itemId);
        return Optional.ofNullable(item);
    }
}
