package com.example.backend.service;

import com.example.backend.model.Message;
import com.example.backend.repository.MessageRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class HelloServiceTest {

    @Mock
    private MessageRepository messageRepository;

    @InjectMocks
    private HelloService helloService;

    @Test
    @DisplayName("Should return greeting message when message is present in database")
    void shouldReturnGreetingMessageWhenPresent() {
        // Arrange
        Message mockMessage = new Message("Hello from MySQL Database with Spring Data JPA & Flyway!");
        when(messageRepository.findTopByOrderByIdDesc()).thenReturn(Optional.of(mockMessage));

        // Act
        String result = helloService.getGreeting();

        // Assert
        assertEquals("Hello from MySQL Database with Spring Data JPA & Flyway!", result);
        verify(messageRepository).findTopByOrderByIdDesc();
    }

    @Test
    @DisplayName("Should return fallback message when database contains no records")
    void shouldReturnFallbackMessageWhenEmpty() {
        // Arrange
        when(messageRepository.findTopByOrderByIdDesc()).thenReturn(Optional.empty());

        // Act
        String result = helloService.getGreeting();

        // Assert
        assertEquals("No message found in MySQL database.", result);
        verify(messageRepository).findTopByOrderByIdDesc();
    }
}
