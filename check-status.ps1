Write-Host "--- FORMER FRIEND SYSTEM CHECK ---" -ForegroundColor Green

# Check Frontend
if (Test-Path "frontend/node_modules") {
    Write-Host "[OK] Frontend dependencies installed." -ForegroundColor Cyan
} else {
    Write-Host "[!!] Frontend dependencies MISSING. Run 'cd frontend; npm install'" -ForegroundColor Red
}

# Check Backend
if (Test-Path "backend/node_modules") {
    Write-Host "[OK] Backend dependencies installed." -ForegroundColor Cyan
} else {
    Write-Host "[!!] Backend dependencies MISSING. Run 'cd backend; npm install'" -ForegroundColor Red
}

# Check MCP
if (Test-Path "mcp-servers/node_modules") {
    Write-Host "[OK] MCP dependencies installed." -ForegroundColor Cyan
} else {
    Write-Host "[!!] MCP dependencies MISSING. Run 'cd mcp-servers; npm install'" -ForegroundColor Red
}

Write-Host "`n--- RUN COMMANDS ---" -ForegroundColor Yellow
Write-Host "1. Start Backend:    cd backend; npm run dev"
Write-Host "2. Start MCP:        cd mcp-servers; npm run dev"
Write-Host "3. Start Frontend:   cd frontend; npm run dev"
Write-Host "----------------------------------"
