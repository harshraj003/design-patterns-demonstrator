# Design Patterns Demonstrator

## Overview
The **Design Patterns Demonstrator** is a console-based **TypeScript application** developed for the **2025-26 coding exercises**.  
It creatively demonstrates **six software design patterns** with **space-themed use cases**, showcasing understanding of **behavioral, creational, and structural patterns**.  

The project adheres to the exercise requirements by implementing:
- **Two behavioral patterns**: Observer, Command  
- **Two creational patterns**: Singleton, Factory  
- **Two structural patterns**: Adapter, Decorator  

Built with **TypeScript (strict mode)**, it incorporates **SOLID principles, OOP concepts, Winston logging, exception handling, retries, input validation, and performance optimizations**.  

The modular structure (camelCase naming, separate files per class) follows best practices for **maintainability and scalability**.  
It runs indefinitely with a **menu-driven interface**, emphasizing **creativity and spontaneity** through user-driven demonstrations (e.g., custom alerts, mission IDs).  

---

## Features

### Core Functionality
- **Menu-Driven Interface**: Interactive console menu for selecting and demonstrating each pattern.  
- **User Input Handling**: Prompts for custom inputs (e.g., alert messages, mission IDs).  

### Pattern Demonstrations

#### Behavioral Patterns
- **Observer Pattern**: Space Station sends alerts to registered astronauts.  
- **Command Pattern**: Executes mission commands (launch rocket, deploy satellite).  

#### Creational Patterns
- **Singleton Pattern**: Manages global mission configurations.  
- **Factory Pattern**: Creates spacecraft (Rover, Orbiter) with UUIDs.  

#### Structural Patterns
- **Adapter Pattern**: Adapts legacy sensor data to modern interfaces.  
- **Decorator Pattern**: Enhances mission reports with timestamps and signatures.  

---

### Error Handling
- Retries for invalid inputs (**3 attempts**)  
- Try-catch for all operations  

### Advanced Enhancements
- **Transient Error Handling**: RetryOperation utility for failed inputs  
- **Logging**: Winston logs to console & file  
- **Input Validation**: Detects empty/invalid inputs with clear messages  
- **Performance**: Efficient data structures (`Map`, arrays)  

---

## Design Patterns Implemented
- **Observer (Behavioral)**: SpaceStation → AstronautObserver  
- **Command (Behavioral)**: CommandExecutor → LaunchRocketCommand, DeploySatelliteCommand  
- **Singleton (Creational)**: MissionConfigManager (single instance configs)  
- **Factory (Creational)**: SpacecraftFactory → Rover / Orbiter  
- **Adapter (Structural)**: LegacySensorAdapter bridges old & modern data  
- **Decorator (Structural)**: TimestampDecorator & SignatureDecorator enhance reports  

---

## Gold Standards
- **Logging**: Winston logs all actions (console + file)  
- **Exception Handling**: Robust `try-catch` with type checking  
- **Input Validation**: Handles invalid/empty inputs gracefully  
- **Performance**: O(1) `Map` access, minimal loops  

---

## Setup Instructions

### Prerequisites
- **Node.js**: v20.x recommended  
- **Git**: Installed for cloning  

### Installation Steps
```bash
# Clone the Repository
git clone https://github.com/harshraj003/design-patterns-demonstrator.git
cd design-patterns-demonstrator

# Install Dependencies
npm install
# (Installs typescript, ts-node, winston, readline-sync, uuid, @types)

# Run the Application
npm start
# Executes: ts-node src/main/DesignPatternsDemo.ts

# Build and Compile (Optional)
npm run build
# Compile TS → JS in dist/
npx tsc --noEmit   # check compilation without emit
