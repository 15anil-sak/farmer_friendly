# FORMER FRIEND - Startup Guide

## Current Progress (What we built)
1. **Frontend:** React + Tailwind v4 + Framer Motion (Ready at port 5173)
2. **Backend:** Node + Express + MongoDB (Ready at port 5000)
3. **MCP Server:** AI Simulation Server (Ready at port 5001)
4. **Database:** Mongoose Models and Seeder ready.

---

## NEXT STEPS: Run the Application

### 1. The "Start All" Command
To run everything at once, you can use these commands in **3 separate VS Code terminals**:

**Terminal 1 (Backend):**
```powershell
cd backend; npm run dev
```

**Terminal 2 (AI Server):**
```powershell
cd mcp-servers; npm run dev
```

**Terminal 3 (Frontend):**
```powershell
cd frontend; npm run dev
```

---

### 2. The "Populate Data" Script
If your dashboard is empty, run this after you have registered your first user:
```powershell
cd backend; npm run data:import
```

---

### 3. Verification Checklist
- [ ] Open [http://localhost:5173](http://localhost:5173)
- [ ] See Splash Screen
- [ ] Register a new account
- [ ] Navigate to **Dashboard**
- [ ] Click "Mic" or "Camera" in the Search bar to test the **MCP AI Integration**
- [ ] Check the **Analytics** page (`/analytics`) to see the charts.
- [ ] Check the **Admin** page (`/admin`) to see the product management table.

---

## Technical Maintenance Scripts

| Task | Command |
| :--- | :--- |
| **Install all deps** | `npm install` (run in root, frontend, backend, and mcp-servers) |
| **Clean Build** | `cd frontend; npm run build` |
| **Reset Database** | (Warning: Deletes all) `cd backend; npm run data:import` |
