package com.example.backend.repository;

import com.example.backend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    /**
     * Retrieves the latest message inserted into the database by descending ID.
     */
    Optional<Message> findTopByOrderByIdDesc();
}

