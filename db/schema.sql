-- Creates database if it doesn't exist
CREATE DATABASE IF NOT EXISTS gamify_development;

-- Select the newly created database
USE gamify_development;

CREATE TABLE IF NOT EXISTS Users (
    userId VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    level INT DEFAULT 1,
    experience INT DEFAULT 0,
    coins INT DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Tasks (
    tasksId VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    content TEXT,
    difficulty ENUM('low', 'medium', 'high') NOT NULL,
    isCompleted BOOLEAN,
    userId VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE TABLE IF NOT EXISTS Rewards (
    rewardsId VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    cost INT NOT NULL,
    isRedeemed BOOLEAN,
    userId VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);


-- CREATE DATABASE IF NOT EXISTS gamify_development;

-- USE gamify_test;