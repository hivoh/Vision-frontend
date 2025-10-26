# AI-Powered Security Surveillance System

## Overview
This is an advanced AI-powered security surveillance system built with React, TypeScript, and Vite. The application provides real-time human detection, smart geofencing capabilities, and instant alert management for modern security needs.

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 19.2 with TypeScript
- **Build Tool**: Vite 7.1.9
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM 7.9.4
- **Styling**: Tailwind CSS 4.1.14
- **Maps**: React Leaflet 5.0.0
- **Charts**: Recharts 3.2.1
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: React Hot Toast

### Key Features
1. **Real-time Detection**: Advanced AI-powered human detection with instant alerts
2. **Smart Geofencing**: Create virtual boundaries and get notified of intrusions
3. **Instant Alerts**: Email and push notifications for immediate response
4. **Interactive Dashboard**: Powerful monitoring interface for comprehensive security management

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── forms/          # Form components (Login, Signup, Camera)
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   └── ui/             # UI primitives (Button, Card, Input, etc.)
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── auth/          # Authentication pages
│   ├── Dashboard.tsx
│   ├── Landing.tsx
│   └── Login.tsx
├── services/           # API and service integrations
├── store/              # Redux store and slices
│   └── slices/        # Redux slices (auth, camera, alerts)
├── styles/             # Global styles
└── utils/              # Utility functions and constants
```

## Development

### Running Locally
The application runs on port 5000 and is configured for the Replit environment:
- Development server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

### Configuration
- **Vite Config**: Configured to run on 0.0.0.0:5000 with HMR support
- **Deployment**: Uses autoscale deployment with Vite preview for production

## Recent Changes
- **October 26, 2025**: Initial project setup in Replit environment
  - Configured Vite to use port 5000 with host 0.0.0.0
  - Set up frontend workflow
  - Configured deployment for autoscale hosting

## Current State
- Frontend is fully functional and running
- No backend required - this is a frontend-only application
- All dependencies installed and working
- Ready for development and deployment
