# Greenhouse Management Platform

A microservices platform for managing and monitoring automated greenhouses.

## Architecture

### Message Broker
- **NATS JetStream** — asynchronous communication between services

### Database
- **MongoDB** — primary database for most services
- Alternative databases are considered individually per service if needed

### Orchestration & Deployment
- **Docker** — containerization
- **Kubernetes** — container orchestration
- **Skaffold** — build and deployment automation during development

---

## Microservices

### `auth` — Authentication & Authorization
- **Stack:** Node.js + TypeScript + Express
- **DB:** MongoDB
- **Responsibility:** JWT tokens, RBAC, session management, greenhouse access control

### `greenhouse-registry` — Greenhouse Registry
- **Stack:** Node.js + TypeScript + NestJS
- **DB:** MongoDB
- **Responsibility:** CRUD for greenhouses, zones, sensors, and actuators

### `frontend` — Web Interface
- **Stack:** React + TypeScript + Vite + Three.js + React Three Fiber + React Three Drei
- **DB:** —
- **Responsibility:** Browser-based greenhouse management UI, 3D visualization of greenhouses and zones, real-time telemetry monitoring
