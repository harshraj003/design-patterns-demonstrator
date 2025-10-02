# Design Patterns Demonstrator

## Abstract

A console-based **TypeScript** application demonstrating six design patterns (**Observer**, **Command**, **Singleton**, **Factory**, **Adapter**, **Decorator**) through engaging space-themed scenarios, featuring an an interactive menu-driven interface, **SOLID** principles, **Winston** logging, and robust error handling for reliable and maintainable code.

---

## What is This Project?

The Design Patterns Demonstrator is a **user-friendly console program** built in **TypeScript** that brings six popular software design patterns to life using a space exploration theme. Design patterns are like proven recipes for solving common coding challenges, and this project shows how they work in a fun way—think space stations sending alerts or rockets launching missions. You interact with the program through a simple menu, choosing a pattern and entering custom inputs, like an alert message or a mission name, to see the results instantly. It’s designed to be clear for beginners, reliable with error handling, and well-organized with logs to track what’s happening, making it a great learning tool for anyone curious about coding patterns.

---

## Why It Exists

This project was created to:

* Teach six key design patterns in an approachable, **space-themed context**.
* Show how to write clean, organized code using **TypeScript** and **best practices**.
* Offer an **interactive experience** where users can experiment with patterns and see real-time outputs.

---

## What It Does

* **Interactive Menu**: Pick from six patterns (**Observer, Command, Singleton, Factory, Adapter, Decorator**) to explore.
* **Custom Inputs**: Enter your own data, like a “Meteor warning” alert or a mission name, to test each pattern.
* **Space-Themed Scenarios**: Patterns are demonstrated with fun examples, like astronauts receiving alerts or spacecraft being built.
* **Error Handling**: If you enter invalid inputs, the program prompts you to try again (up to 3 times) with clear messages.
* **Logging**: Tracks actions in a file (**design-patterns-demo.log**) and on-screen for easy debugging.

---

## How It’s Implemented

### Parameters

| Parameter | Description | Example |
| :--- | :--- | :--- |
| **Menu Choice** | A number (**1–7**) to select a pattern or exit. | 1 for Observer, 2 for Command, 7 to quit. |
| **User Inputs** | Varies by pattern: | |
| Observer | An alert message (string, e.g., “Meteor warning”). | |
| Command | Mission ID and satellite name (strings, e.g., “Apollo”, “Sat1”). | |
| Singleton | Configuration key and value (strings, e.g., “mission”, “active”). | |
| Factory | Spacecraft type (string, e.g., “Rover” or “Orbiter”, case-insensitive). | |
| Adapter | No user input (automatic demo). | |
| Decorator | Signature name (string, e.g., “John”). | |
| **Validation** | Inputs are checked for: | |
| | Valid numbers (menu choice: 1–7). | |
| | Non-empty strings (e.g., mission ID cannot be blank). | |
| | Valid spacecraft types (case-insensitive match for “Rover” or “Orbiter”). | |
| **Outputs** | Console messages showing the pattern’s result. | e.g., “Astro1 received alert: Meteor warning” |
| | Logs written to **design-patterns-demo.log** with timestamps and details. | |

### Workflow

1.  **Program Start**: The program loads (**DesignPatternsDemo.ts**) and displays a menu with options 1–7.
2.  **User Selection**: You enter a number to choose a pattern (e.g., **1 for Observer**).
    * *Invalid input (e.g., 8) triggers a retry mechanism (3 attempts) with a warning.*
3.  **Pattern Execution**:
    * **Observer**: Registers two astronauts, takes your alert message, and notifies them (e.g., “Astro1 received alert: Meteor warning”).
    * **Command**: Takes a mission ID and satellite name, executes commands like launching a rocket or deploying a satellite.
    * **Singleton**: Stores and retrieves a configuration key-value pair using a single instance.
    * **Factory**: Creates a spacecraft (**Rover** or **Orbiter**) with a unique ID based on your input.
    * **Adapter**: Converts fake legacy sensor data to a modern format (automatic).
    * **Decorator**: Adds a timestamp and signature to a mission report based on your input.
4.  **Logging**: Each action (e.g., alert sent, command executed) is logged with **Winston** to both console and file.
5.  **Loop**: Returns to the menu until you choose **7 to exit**.

### Key Features in Code

* **TypeScript**: Ensures safe coding with strict type checks.
* **Design Patterns**:
    * **Observer**: `SpaceStation.ts` notifies `AstronautObserver` objects.
    * **Command**: `CommandExecutor.ts` runs `LaunchRocketCommand` and `DeploySatelliteCommand`.
    * **Singleton**: `MissionConfigManager.ts` ensures one instance with a `Map` for settings.
    * **Factory**: `SpacecraftFactory.ts` creates `Rover` or `Orbiter` with UUIDs.
    * **Adapter**: `LegacySensorAdapter.ts` bridges old and new data formats.
    * **Decorator**: `ReportDecorators.ts` adds timestamps and signatures to reports.
* **Error Handling**: Uses `try-catch` and a `RetryOperation.ts` utility for up to **3 input retries**.
* **Logging**: `Logger.ts` uses **Winston** to save actions to `design-patterns-demo.log`.

---

## How to Set Up and Run

### What You Need

* **Node.js**: Download version **20.x** from [nodejs.org](https://nodejs.org/) to run the program.
* **Git**: Install from [git-scm.com](https://git-scm.com/) to download the code.
* A terminal (e.g., Command Prompt on Windows) and an editor like VS Code.

### Step-by-Step Setup

1.  **Get the Code**: Open Command Prompt and run:
    ```bash
    git clone [https://github.com/harshraj003/design-patterns-demonstrator.git](https://github.com/harshraj003/design-patterns-demonstrator.git)
    cd design-patterns-demonstrator
    ```

2.  **Install Tools**: Run:
    ```bash
    npm install
    ```
    This sets up TypeScript, Winston (for logging), and other dependencies.

3.  **Start the Program**: Run:
    ```bash
    npm start
    ```
    This launches the menu. Choose a number (**1–7**) and follow prompts to try a pattern.

4.  **Optional: Build Code**:
    * To compile TypeScript to JavaScript:
        ```bash
        npm run build
        ```
    * To check for errors without saving files:
        ```bash
        npx tsc --noEmit
        ```

5.  **View Logs**: Check the log file:
    ```bash
    type design-patterns-demo.log
    ```
    *Example:*
    `2025-10-02T16:36:45 [INFO]: Alert sent: Meteor warning`

---

## How to Use It

### Launch the Program

Run `npm start` to see:
### Design Patterns Demonstration Menu:

1. Observer Pattern: Space Station Alert System

2. Command Pattern: Mission Command Executor

3. Singleton Pattern: Mission Config Manager

4. Factory Pattern: Spacecraft Factory

5. Adapter Pattern: Legacy Sensor Adapter

6. Decorator Pattern: Mission Report Decorator

7. Exit

### Choose a Pattern

* Type a number (e.g., **1 for Observer**).
* Enter requested inputs (e.g., “Meteor warning” for Observer).
* See results on screen and in logs.

### Example Interaction

Enter your choice: 1
Enter alert message: Meteor warning
Astro1 received alert: Meteor warning
2025-10-02T16:36:45 [INFO]: Astro1 notified of alert: Meteor warning
Astro2 received alert: Meteor warning
2025-10-02T16:36:45 [INFO]: Astro2 notified of alert: Meteor warning
Enter your choice: 2
Enter mission ID: Apollo
Launching rocket for mission Apollo
2025-10-02T16:36:45 [INFO]: Executed launch for mission Apollo
Enter satellite name: Sat1
Deploying satellite Sat1
2025-10-02T16:36:45 [INFO]: Executed deployment for satellite Sat1
Enter your choice: 7
2025-10-02T16:36:45 [INFO]: Application exiting.
Exiting...


### Handling Mistakes

* Invalid input (e.g., 8) triggers:
    `2025-10-02T16:36:45 [WARN]: Invalid choice. Enter a number between 1 and 7. Attempt 1/3`

---

## What’s in the Code?

### Project Structure
.gitignore: Skips temporary files like node_modules.
README.md: This guide.
package.json: Lists dependencies and scripts.
tsconfig.json: Configures TypeScript for strict checks.
src/:
main/: Core logic (e.g., SpaceStation.ts, CommandExecutor.ts).
types/: Defines data types (e.g., Enums.ts for spacecraft types).
utils/: Tools like Logger.ts for logging and RetryOperation.ts for retries.


### Code Highlights

* **TypeScript**: Catches errors early with strict typing.
* **Modular Design**: Each pattern has its own file for clarity.
* **Best Practices**: Follows **SOLID** principles (e.g., single responsibility per class).
* **Performance**: Uses efficient data structures (e.g., `Map` for $O(1)$ config access).

### Why It’s Great

* **Fun and Educational**: Space themes make learning patterns enjoyable.
* **Interactive**: Lets you play with inputs to see how patterns work.
* **Reliable**: Handles errors gracefully with retries and clear messages.
* **Well-Organized**: Clean code structure and logs make it easy to understand.
* **Engaging**: Extra features like custom inputs add creativity.

---

## Testing the Program

### Test Cases

| Pattern | Input | Expected Output Snippet |
| :--- | :--- | :--- |
| **Observer Pattern** | Option **1**, “Meteor warning” | `Astro1 received alert: Meteor warning` `Astro2 received alert: Meteor warning` |
| **Command Pattern** | Option **2**, “Apollo”, “Sat1” | `Launching rocket for mission Apollo` `Deploying satellite Sat1` |
| **Invalid Input** | Option **8** | `Failed after 3 attempts: Invalid choice. Enter a number between 1 and 7.` |

---

## Future Improvements

* Add an **“undo”** feature for commands.
* Support **multiple alert types** in Observer.
* Expand Factory with **more spacecraft types**.

---

## Contact

Reach out to **Harsh Raj** on GitHub: [harshraj003](https://github.com/harshraj003)