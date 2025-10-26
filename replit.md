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
- **October 26, 2025**: Major UI/UX redesign and professional implementation
  - Completely redesigned with professional dark theme using color palette (#282828, #363636, #d2813d, etc.)
  - Fixed Tailwind CSS v4 configuration with @theme syntax for custom colors
  - Created comprehensive UI component library (Button, Card, Input, Badge, etc.)
  - Built complete Dashboard layout with sidebar navigation and header
  - Implemented Dashboard pages:
    - Overview: Real-time stats, recent detections, system health
    - Cameras: Camera management with search, filters, and status indicators  
    - Geofences: Virtual boundary management with map integration
    - Alerts: Alert management system with filtering and severity indicators
    - Analytics: Detection trends and performance metrics
    - Settings: Account and system configuration
  - Enhanced Landing page with modern hero section and feature showcase
  - Professional Login/Signup pages with validation and multi-step flow
  - Updated router with nested dashboard routes
  - Configured Vite for Replit environment (port 5000, host 0.0.0.0, allowedHosts)
  - Set up deployment configuration for production
  
## Current State
- Professional dark-themed surveillance platform fully functional
- All pages responsive and optimized for mobile/tablet/desktop
- Component-based architecture with reusable UI elements
- Redux Toolkit state management configured
- Ready for backend API integration
- Production deployment configured
