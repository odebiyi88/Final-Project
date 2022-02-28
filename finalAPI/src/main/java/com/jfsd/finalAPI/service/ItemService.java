package com.jfsd.finalAPI.service;

import com.jfsd.finalAPI.repository.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    Item save(Item item);
    void delete(int itemId);
    List<Item> all();
    Item findById(int itemId);
}
