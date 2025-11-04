# Excellence University Website

## Overview

This is a modern, comprehensive college/university website built as a full-stack web application. The project provides a complete digital presence for an educational institution, featuring information about departments, faculty, admissions, news, events, and campus facilities. The application uses a Material Design-inspired design system with educational institution customization to establish credibility and trust while maintaining excellent usability across 10+ major sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type safety and modern component architecture
- Vite as the build tool and development server for fast builds and hot module replacement
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with client-side routing

**UI Component System**
- shadcn/ui components built on Radix UI primitives for accessible, composable UI components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system following Material Design principles adapted for educational institutions
- Comprehensive typography hierarchy and spacing system defined in design guidelines
- Theme support (light/dark mode) with CSS variables and local storage persistence

**State Management**
- TanStack Query (React Query) for server state management, caching, and data fetching
- Form state managed via React Hook Form with Zod schema validation
- Local component state using React hooks

**Component Structure**
- Reusable presentational components (DepartmentCard, FacultyCard, NewsCard, EventCard, etc.)
- Layout components (Navigation, Footer, Hero)
- Utility components (ContactForm, GalleryGrid, QuickLinks, StatsBar)
- Page-level components in `/pages` directory
- UI primitives in `/components/ui` from shadcn/ui library

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Node.js runtime environment
- TypeScript for type-safe server-side code

**API Design**
- RESTful API endpoints under `/api` prefix
- Separation of concerns: routes defined in `server/routes.ts`, storage abstraction in `server/storage.ts`
- Request/response logging middleware for API monitoring
- JSON-based request/response format

**Storage Abstraction**
- Interface-based storage layer (`IStorage`) for flexibility and testability
- In-memory storage implementation (`MemStorage`) for development
- Designed to support database integration (Drizzle ORM configured for PostgreSQL)
- Data models include: Users, Departments, Faculty, News, Events, Contact Submissions

**Development Environment**
- Vite middleware integration for seamless development experience
- Hot module replacement in development
- Replit-specific plugins for enhanced development experience

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- Schema definition using Drizzle's type-safe schema builder
- Database migrations managed through Drizzle Kit (output to `/migrations`)
- Zod integration for runtime validation matching database schema

**Data Models**
- Users: Authentication and user management
- Contact Submissions: Form submissions from contact page
- Departments: Academic department information
- Faculty: Faculty member profiles and details
- News: News articles and announcements
- Events: Campus events and activities

**Current Implementation**
- In-memory storage for rapid prototyping and development
- Database schema defined but not yet connected (prepared for migration)
- UUID-based primary keys using PostgreSQL's `gen_random_uuid()`

### Authentication and Authorization

**Current State**
- User schema defined with username/password fields
- No active authentication implementation in routes
- Authentication infrastructure prepared but not implemented
- Session management ready via connect-pg-simple for PostgreSQL sessions

**Planned Approach**
- Express session-based authentication
- Password hashing (infrastructure ready but not implemented)
- Protected routes for admin functionality

### External Dependencies

**UI & Styling**
- Radix UI: Accessible component primitives for complex UI patterns
- Tailwind CSS: Utility-first CSS framework
- shadcn/ui: Pre-built component library following design system
- Google Fonts (Inter): Typography for clean, professional aesthetic
- Lucide React: Icon library for consistent iconography

**Data Management**
- TanStack Query: Server state management and caching
- React Hook Form: Form state and validation
- Zod: Schema validation and type inference
- Drizzle Zod: Integration between Drizzle schemas and Zod validation

**Database & Storage**
- Neon Database (@neondatabase/serverless): Serverless PostgreSQL
- Drizzle ORM: Type-safe database toolkit
- connect-pg-simple: PostgreSQL session store for Express

**Development Tools**
- TypeScript: Type safety across frontend and backend
- Vite: Build tool and development server
- tsx: TypeScript execution for Node.js
- esbuild: Fast JavaScript/TypeScript bundler for production builds
- Replit plugins: Development experience enhancements (@replit/vite-plugin-*)

**Utilities**
- date-fns: Date manipulation and formatting
- clsx & class-variance-authority: Conditional class name composition
- nanoid: Unique ID generation

### Build and Deployment

**Development**
- `npm run dev`: Starts development server with tsx and Vite
- Hot module replacement for instant feedback
- TypeScript type checking with `npm run check`

**Production Build**
- Client: Vite builds optimized React application to `dist/public`
- Server: esbuild bundles Express server with ESM format to `dist`
- Separate client and server build outputs

**Environment Configuration**
- Database URL via `DATABASE_URL` environment variable
- Node environment detection (`NODE_ENV`)
- Replit-specific environment variables for platform features