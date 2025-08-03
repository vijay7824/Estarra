# Overview

This is a full-stack web application for Estarra, a civil engineering and construction services company based in Lucknow. The application serves as a professional business website showcasing the company's 15+ years of experience in residential construction, commercial buildings, turnkey projects, renovation, interior design, and project management services. The site features a modern, responsive design with contact inquiry functionality and a purple-themed brand identity.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using React with TypeScript and follows a modern component-based architecture:

- **Framework**: React 18 with TypeScript for type safety and better development experience
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui component library for consistent UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

The application uses a single-page layout with smooth scrolling navigation between sections (hero, services, projects, about, contact). The UI follows the "New York" style variant from shadcn/ui with a purple brand color scheme.

## Backend Architecture

The backend is an Express.js server with TypeScript:

- **Framework**: Express.js with TypeScript for API endpoints
- **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
- **Storage**: Configurable storage interface (currently using in-memory storage for development, designed to support database storage)
- **API Design**: RESTful API for contact inquiries with proper error handling and validation
- **Development**: Hot reload using tsx and Vite integration for development

The server handles contact form submissions, stores inquiries, and provides endpoints for retrieving inquiry data.

## Data Storage Solutions

- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Storage**: In-memory storage implementation for development/testing

The database schema includes tables for users and contact inquiries with proper relationships and constraints.

## Authentication and Authorization

The application currently has basic user schema defined but no active authentication implementation. The storage interface includes user management methods, suggesting future authentication features are planned.

## External Dependencies

- **Database**: Neon Database (PostgreSQL) - serverless database solution
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography
- **Email/Contact**: WhatsApp integration for direct contact functionality
- **Development**: Replit-specific plugins for development environment integration
- **Styling**: Google Fonts (Inter) for typography
- **Image Hosting**: Unsplash for project portfolio images

The application is designed to be deployed on Replit with specific configurations for the Replit environment, including development banners and cartographer integration.