# Ecommerce-ls

A modern e-commerce authentication boilerplate built with Next.js, TypeScript, Prisma, PostgreSQL, and Tailwind CSS.

## Features
- User registration and login
- Authentication API using Next.js Route Handlers
- Form validation with React Hook Form and Zod
- PostgreSQL database with Prisma ORM
- Modular and scalable folder structure
- TypeScript for type safety
- Tailwind CSS for styling

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Cope2711/ecommerce-ls.git
cd ecommerce-ls
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy the `.env.template` file to `.env` and update the values as needed:
```bash
cp .env.template .env
```
Edit `.env` and set your PostgreSQL connection string for `DATABASE_URL`.

### 4. Set up the database
Run Prisma migrations to set up your database schema:
```bash
npx prisma migrate dev --name init
```

### 5. Generate Prisma Client
```bash
npx prisma generate
```

### 6. Start the development server
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

## Folder Structure
- `src/app` — Next.js app directory (routes, pages, API)
- `src/client` — Client-side components and services
- `src/server` — Server-side logic, repositories, and services
- `src/shared` — Shared types, schemas, errors, and utilities
- `prisma` — Prisma schema and migrations
- `public` — Static assets

## Requirements
- Node.js 18+
- PostgreSQL database

## Configuration
- Update `DATABASE_URL` in your `.env` file to match your PostgreSQL credentials.
- Adjust other settings as needed in `next.config.ts` and `prisma/schema.prisma`.

## Using Docker for PostgreSQL (Optional but Recommended)

You can quickly spin up a PostgreSQL database for local development using Docker Compose. A `docker-compose.yml` file is provided in the project root.

### Start the PostgreSQL container
```bash
docker-compose up -d
```
This will start a PostgreSQL instance with the following credentials:
- **User:** ecommerce-ls
- **Password:** ecommerce-ls
- **Database:** ecommerce_db
- **Port:** 5432

Your `.env` file should look like this:
```
DATABASE_URL="postgresql://ecommerce-ls:ecommerce-ls@localhost:5432/ecommerce_db"
```

The database data will persist in a Docker-managed volume (`db_data`).

To stop and remove the container:
```bash
docker-compose down
```

## License
MIT
