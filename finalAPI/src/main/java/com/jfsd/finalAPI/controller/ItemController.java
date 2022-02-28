package com.jfsd.finalAPI.controller;

import com.jfsd.finalAPI.controller.dto.ItemDto;
import com.jfsd.finalAPI.repository.ItemRepository;
import com.jfsd.finalAPI.repository.entity.Item;
import com.jfsd.finalAPI.service.ItemService;
import com.jfsd.finalAPI.service.ItemServiceMySQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/item")
public class ItemController{
//    final ItemRepository itemRepository;
    final ItemService itemService;

//    public ItemController(@Autowired ItemRepository itemRepository )
//    {
//        this.itemRepository = itemRepository;
//    }

    public ItemController(@Autowired ItemService itemService)
    {
        this.itemService = itemService;
    }

    @GetMapping("/all")
    public Iterable<Item> getItems(){
        return itemService.all();
    }

    @PostMapping
    public Item save(@RequestBody ItemDto itemDto)
    {
        return itemService.save(new Item(itemDto));
    }

    @GetMapping("/{id}")
    public Item findItemById(@PathVariable Integer id){
        return itemService.findById(id);
    }

    @PutMapping("/{id}")
    public Item update(@RequestBody ItemDto itemDto, @PathVariable Integer id)
    {
        Item item = itemService.findById(id);
        item.setName(itemDto.getName());
        item.setDescription(itemDto.getDescription());
        item.setImageUrl(itemDto.getImageUrl());
        return itemService.save(item);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id)
    {
        itemService.delete(id);
    }

}
