# To-Do App in React

## Overview

This is a simple to-do application built with React. It allows users to add, delete, mark as complete and manage their to-do tasks. 

## System Design

The application follows a component-based architecture, with the main components being:
- `App`: The root component that holds the state and manages the overall application logic.
- `ToDoList`: Displays the list of to-do tasks.
- `ToDoItem`: Represents a single to-do .
- `ToDoForm`: A form for adding new to-do items.

State management is handled within the `App` component using React's `useState` hook. Each to-do item is represented as an object with properties for its text and completion status.

## Implementation

### Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the components.

### Key Features
- Add new to-do tasks.
- Mark to-do tasks as completed.
- Remove to-do tasks.

