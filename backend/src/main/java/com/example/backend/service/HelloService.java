package com.example.backend.service;

import com.example.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloService {

    private final MessageRepository messageRepository;

    @Autowired
    public HelloService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public String getGreeting() {
        return messageRepository.getMessage();
    }
}
