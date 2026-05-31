# Orders & Products — Next.js App Router

Тестовое задание для управления Orders и Products.

## Stack

- Next.js 16.2.6 (App Router)
- React 19.2.6
- TypeScript
- Redux Toolkit
- Socket.IO
- Bootstrap
- Bootstrap Icons
- Framer Motion
- i18next
- Vitest + Testing Library
- Docker

## Features

- Orders page
- Products page
- Order Details
- Delete Order Modal
- Products Filter
- Active Sessions Counter (WebSocket)
- Real Time Clock
- Route Animations
- Lazy Loading
- Internationalization (RU / EN)
- Unit Tests

## Requirements

- Node.js 22+
- npm 10+
- Docker Desktop (optional)

## Installation

```bash
git clone <repository-url>
cd dzen-next
npm install
```

## Development

```bash
npm run dev
```

Open: http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Run Tests

```bash
npm test
```

## Docker

```bash
npm run build
docker compose build
docker compose up
```

Or:

```bash
docker compose up --build
```

Stop:

```bash
docker compose down
```
## Database

Schema file:

```txt
database/schema.sql
```