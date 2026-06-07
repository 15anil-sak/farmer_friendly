# FORMER FRIEND - Agricultural Platform

Former Friend is a mobile-first React web application designed for Indian farmers. It leverages the Model Context Protocol (MCP) to provide AI-driven agricultural guidance, product identification, and information on government schemes.

## Features

- **Product Identification:** Search for pesticides, fertilizers, and tools.
- **Government Schemes:** Stay updated with the latest benefits and eligibility.
- **AI Integration (MCP):**
  - **Voice Search:** Mock voice-to-text processing for hands-free navigation.
  - **Image Identification:** Identify products using image analysis.
  - **Summarization:** AI-summarized guidance for complex agricultural topics.
- **Authentication:** Secure JWT-based registration and login.
- **Multilingual Ready:** Built with regional language support in mind.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion, React Query, Lucide React.
- **Backend:** Node.js, Express, MongoDB, JWT.
- **MCP Server:** Local Node.js server simulating AI capabilities.

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (Running locally or on Atlas)

### Installation & Setup

1. **Clone the repository.**
2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your MONGODB_URI and JWT_SECRET
   npm run dev
   ```
3. **Setup MCP Server:**
   ```bash
   cd mcp-servers
   npm install
   npm run dev
   ```
4. **Setup Frontend:**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm run dev
   ```

### Data Seeding

To populate the application with initial data:
1. Register an account in the UI.
2. Manually set `isAdmin: true` for that user in your MongoDB database.
3. Run the seeder:
   ```bash
   cd backend
   npm run data:import
   ```

## Folder Structure

- `frontend/`: React source code and assets.
- `backend/`: Express API, Models, and Routes.
- `mcp-servers/`: Local AI service simulation.
- `assets/`: Original project assets (Logo, etc.).
- `docs/`: Project documentation.

## Deployment

The frontend is optimized for **Netlify** (see `netlify.toml`).
The backend and MCP servers can be deployed to any Node.js environment (Render, Heroku, VPS).
# farmer_friendly
