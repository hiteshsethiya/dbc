package com.dbc.app.service;

import com.dbc.app.controllers.error.UniqueConstraintViolationException;
import com.dbc.app.model.SwiggyItem;
import com.dbc.app.repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemsRepository itemsRepository;

    public void save(SwiggyItem swiggyItem) throws UniqueConstraintViolationException {
        try {
            itemsRepository.save(swiggyItem);
        }
        catch (DataIntegrityViolationException ex) {
            throw new UniqueConstraintViolationException("Bank Account Already Exists");
        }
    }

    public Optional<SwiggyItem> getByItemId(Long itemId) {
        SwiggyItem swiggyItem = itemsRepository.findByItemId(itemId);
        return Optional.ofNullable(swiggyItem);
    }
}
