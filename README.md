# react-go-template

A minimal Preact + Go project template.

**Frontend:** Preact, TypeScript, Vite, Vitest, @testing-library  
**Backend:** Go (stdlib), with a single `/api/health` handler  
**Infrastructure:** Docker multi-stage builds, Compose for dev and prod

## Development

```sh
cp .env.example .env
docker compose up
```

Frontend dev server: http://localhost:5173  
Backend: http://localhost:8080

## Without Docker

```sh
# Backend
cd backend && go run .

# Frontend
cd frontend && npm install && npm run dev
```

## Test

```sh
# Backend
cd backend && go test ./...

# Frontend
cd frontend && npm test
```

## Production

```sh
docker compose -f docker-compose.yml up --build
```
