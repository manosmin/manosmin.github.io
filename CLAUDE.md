# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website for Manos Minadakis (manosmin.github.io). It's a single-page application showcasing professional experience, skills, projects, and certificates with an interactive Three.js background animation.

## Development Commands

- `npm start` - Start development server (React development mode)
- `npm run build` - Build production bundle
- `npm test` - Run tests with React Testing Library
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Architecture

### Main Application Structure
- **Single Page Application**: Built with React 18 and Create React App
- **Component-based**: Modular components in `src/components/`
- **Dark Mode**: Toggle between light/dark themes with persistent state
- **Three.js Integration**: Interactive 3D background animation
- **EmailJS Integration**: Contact form functionality without backend server

### Key Components
- `App.js` - Main application with dark mode state and layout structure
- `Header.js` - Navigation with dark mode toggle and mobile drawer
- `ThreeAnimation.js` - Three.js 3D cube animation background
- `LettersAnimation.js` - Animated text effects
- `Contact.js` - Contact form with EmailJS integration
- `Drawer.js` - Mobile navigation drawer

### Custom Hook
- `useIsVisible()` in `App.js` - Intersection Observer hook for scroll-based animations

## Styling & Animations

- **Tailwind CSS**: Primary styling framework with extensive custom animations
- **Custom Animations**: Defined in `tailwind.config.js`:
  - `typewriter`, `caret` - Text typing effects
  - `drop-in`, `fly-in-down`, `fade-in-*` - Entrance animations
  - `slide-in*` - Sliding transitions
- **Responsive Design**: Mobile-first with breakpoints at md (768px) and 2xl (1536px)
- **Dark Mode**: CSS class-based theming with Tailwind's dark variant

## Environment Variables

Required for EmailJS contact form functionality:
- `REACT_APP_EMAIL_SERVICE_ID` - EmailJS service identifier
- `REACT_APP_EMAIL_TEMPLATE_ID` - Email template identifier  
- `REACT_APP_EMAIL_USER_ID` - EmailJS user/public key

## Dependencies

### Core Libraries
- `react` & `react-dom` - React framework
- `three` - 3D graphics library for background animation
- `emailjs-com` - Client-side email sending
- `react-icons` - Icon library (primarily Ionicons5)
- `typewriter-effect` - Text animation effects

### Development & Build
- `tailwindcss` - CSS framework
- `gh-pages` - GitHub Pages deployment
- Standard Create React App tooling (react-scripts, testing-library)

## Deployment

The site deploys to GitHub Pages at `https://manosmin.github.io/`. The build process:
1. `npm run predeploy` builds the project
2. `npm run deploy` publishes the build folder to gh-pages branch

## Component Patterns

- All components use functional React with hooks
- Animation delays are controlled via CSS custom properties (`--delay`)
- Dark mode is handled through prop drilling from App component
- Intersection Observer used for scroll-triggered animations
- Mobile responsiveness handled through Tailwind responsive classes