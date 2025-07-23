# GetMeThere - Public Transportation App

## Overview

GetMeThere is a modern web application for tracking public transportation in real-time. It provides users with live vehicle locations, arrival predictions, route information, and service alerts across multiple transport types (bus, train, metro, subway). The application features an interactive map interface, personalized route saving, and comprehensive alert management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack TypeScript architecture with clear separation between client, server, and shared components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with structured error handling

### Database Architecture
- **Primary Database**: PostgreSQL via Neon Database
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Data Validation**: Zod schemas integrated with Drizzle for type-safe operations

## Key Components

### Core Pages
1. **Home Page**: Real-time map view with nearby transit information
2. **Routes Page**: Browse and search available transportation routes
3. **Alerts Page**: Service disruptions, delays, and notifications
4. **More Page**: Settings, preferences, and additional features

### Data Models
- **Users**: Authentication and personalization
- **Routes**: Transportation lines with metadata (number, name, type, color)
- **Stops**: Physical locations with GPS coordinates
- **Vehicles**: Real-time tracking with position and crowd levels
- **Arrivals**: Predicted arrival times with delay information
- **Alerts**: Service notifications and disruptions
- **Saved Routes**: User-specific route bookmarks

### UI Components
- **Map Integration**: Dynamic Leaflet.js integration for vehicle tracking
- **Transport Cards**: Standardized displays for route information
- **Alert Notifications**: Real-time alert system with dismissal
- **Navigation**: Bottom tab navigation for mobile-first design

## Data Flow

1. **Real-time Updates**: Vehicle positions and arrival predictions flow from external transit APIs
2. **User Interactions**: Route searches, alert management, and location-based queries
3. **State Synchronization**: React Query manages server state caching and invalidation
4. **Geographic Services**: Location-based features using browser geolocation API

## External Dependencies

### Frontend Dependencies
- **Radix UI**: Accessible component primitives
- **Leaflet**: Interactive map rendering and controls
- **React Hook Form**: Form validation and management
- **date-fns**: Date manipulation and formatting
- **Lucide React**: Consistent icon system

### Backend Dependencies
- **Neon Database**: Serverless PostgreSQL hosting
- **connect-pg-simple**: PostgreSQL session storage
- **Express middleware**: JSON parsing, URL encoding, error handling

### Development Tools
- **ESBuild**: Fast production bundling
- **TSX**: TypeScript execution for development
- **Replit Integration**: Development environment optimization

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite development server with HMR
- **TypeScript Compilation**: Real-time type checking
- **Database Migrations**: Drizzle Kit push for schema updates

### Production Build
- **Client Build**: Vite optimized production bundle
- **Server Build**: ESBuild Node.js bundle with external dependencies
- **Static Assets**: Served from Express with Vite-generated manifests

### Environment Configuration
- **Database Connection**: Environment-based DATABASE_URL configuration
- **Session Management**: PostgreSQL-backed sessions for scalability
- **Error Handling**: Structured error responses with appropriate HTTP status codes

The application is designed for mobile-first usage with responsive design patterns and Progressive Web App capabilities. The architecture prioritizes real-time data accuracy, user experience optimization, and scalable deployment patterns.