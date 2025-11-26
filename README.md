# 📇 CLI Contact Manager

![NodeJS](https://img.shields.io/badge/Node.js-2025-green.svg?style=flat&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

> A robust, type-safe command-line application for managing contacts, built with modern Node.js and TypeScript.

## Overview
This project is a terminal-based tool that allows users to capture, validate, and persist contact information to a local CSV database. It demonstrates the transition from simple scripting to structured **Object-Oriented Programming (OOP)** in a Node.js environment.

It features a polished UI with color-coded prompts, loading spinners, and ASCII art headers.

## Key Features
* **Strong Input Validation:**
    * Uses Regex to strictly enforce Email (`user@domain.com`) and Phone (`11 digits`) formats.
    * Prevents empty or whitespace-only inputs.
* **Data Persistence:**
    * Automatically generates a `contacts.csv` file.
    * Appends new records without overwriting existing data.
    * Handles CSV escaping (e.g., names with commas) automatically via `csv-writer`.
* **Professional UX:**
    * **Chalk:** Color-coded feedback (Red for errors, Cyan for prompts, Green for success).
    * **Ora:** Animated spinners during file I/O operations.
    * **Figlet:** ASCII art startup banner.
* **Architecture:**
    * Built using TypeScript Classes (`class Person`) and Interfaces (`interface PersonType`).
    * Automated timestamp generation (`createdAt`).

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime** | Node.js | Execution Environment |
| **Language** | TypeScript | Static Typing & Interface Implementation |
| **Input** | `prompt-sync` | Synchronous User Input |
| **Storage** | `csv-writer` | structured CSV Data Handling |
| **Styling** | `chalk`, `ora`, `figlet` | Terminal UI & UX |

## Getting Started

### Prerequisites
* Node.js installed (v18 or higher)
* `pnpm` package manager (recommended)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/taophycc/cli-contact-manager.git
    cd cli-contact-manager
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Run the application**
    ```bash
    pnpm start
    ```

> **Note:** You can use `npm install` if you prefer, but it will generate a separate `package-lock.json`.

## 📂 Project Structure

```text
├── src/
│   └── index.ts       # Main application logic & Class definitions
├── contacts.csv       # Database file (Auto-generated)
├── package.json       # Dependencies & Scripts
├── tsconfig.json      # TypeScript Configuration
└── README.md          # Documentation