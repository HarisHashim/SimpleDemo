-- Create message table
CREATE TABLE IF NOT EXISTS message (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial message
INSERT INTO message (text) VALUES ('Hello from MySQL Database with Spring Data JPA & Flyway!');
