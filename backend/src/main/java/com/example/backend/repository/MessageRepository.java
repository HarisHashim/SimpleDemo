package com.example.backend.repository;

import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

    public String getMessage() {
        return "Hello from Spring Boot Backend!";
    }
}
