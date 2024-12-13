# Vanilla Calculator Project

This project is a simple yet elegant calculator application showcasing clean design, responsive layout, and theme-switching functionality. Built using HTML, CSS, and TypeScript, it demonstrates a strong understanding of modern frontend development tools and techniques.

## Design Preview

The calculator features a modern interface with intuitive buttons and smooth theme transitions, making it both functional and visually appealing.

## Features

- **Arithmetic Operations**: Perform addition, subtraction, multiplication, and division seamlessly.
- **Responsive Design**: The layout adapts beautifully to both desktop and mobile devices.
- **Theme Switcher**: Choose between three distinct themes:
  - **Dark Theme**: Sleek and modern look for low-light environments.
  - **Light Theme**: Bright and clean aesthetic for standard use.
  - **Neon Theme**: Vibrant colors for a bold and playful experience.
- **Keyboard Support**: Calculate directly using your keyboard for faster input.
- **Error Prevention**: Includes handling for common errors, like dividing by zero.

## Getting Started

This project is built using **Vite** for a fast and optimized development workflow.

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bartlomiejMilosz/vanilla-calculator.git
   cd vanilla-calculator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` to view the calculator.

### Build for Production

To build the project for production, run:

```bash
npm run build
```

The optimized output will be available in the `dist` directory.

### Preview Production Build

You can preview the production build locally using:

```bash
npm run preview
```

## File Structure

- **HTML**: The main page structure is in `index.html`.
- **CSS**: Styling is applied using two files:
  - `reset.css`: Normalizes browser default styles.
  - `styles.css`: Adds custom styles and theme-specific designs.
- **TypeScript**: Functionality is implemented in modular `app.ts`, with clear separation for themes and core logic.
- **Vite Configuration**: Optimized with `vite.config.js` for fast builds and dev-server support.

## Technologies Used

- **HTML5**: For semantic and accessible structure.
- **CSS3**: For responsive design and smooth transitions.
- **TypeScript**: For modular, type-safe JavaScript logic.
- **Vite**: For fast development, bundling, and production builds.

## Features Overview

- **Display Screen**: Shows the current input, ongoing calculation, or result.
- **Buttons**: Interactive buttons for numbers, operations, and special actions (reset, delete).
- **Theme Switcher**: A toggle to explore three visually distinct themes.

## Credits

- Inspired by **Frontend Mentor Challenges** and personal learning goals.
