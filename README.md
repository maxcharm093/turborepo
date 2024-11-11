NestJS Boilerplate with Turborepo
This repository provides a scalable and efficient monorepo setup using Turborepo. It includes NestJS for backend services and NextJS for frontend applications, with a suite of tools and libraries configured for seamless development and deployment.

## **Features**

NestJS backend
NextJS (v15) frontend

- SWC for fast TypeScript and JavaScript transpilation
- pnpm for efficient dependency management
- JWT Authentication for secure API access
- PostgreSQL database with TypeORM
- Nodemailer for email services
- Linting and Formatting pre-configured for code quality
- Micro-Frontend Support with Turborepo
- shadcn/UI integration for styled components

## **Table of Contents**

- Installation
- Getting Started
- Project Structure
- Scripts
- Environment Variables
- Contributing
- License

### **Installation**

Clone the repository:

```shell
git clone https://github.com/devaungphyo/turborepo.git
```

Navigate to the project directory:

```shell
cd turborepo
```

Install dependencies using pnpm:

```shell
pnpm install
```

Getting Started
To start the development server, run:

```shell
pnpm dev
```

This will start both the NestJS backend and the Next.js frontend in development mode.

Project Structure
The repository is organized into the following structure:

```yaml
turborepo/
├── apps
│   ├── api      # NestJS application
│   └── web     # NextJS application
├── packages
│   ├── ui           # shadcn/UI component library
│   ├── config       # Shared configuration files
│   └── utils        # Shared utility functions
└── .turbo           # Turborepo configuration
```

Backend (NestJS)
The backend is powered by NestJS, with TypeORM configured to use PostgreSQL. JWT authentication is implemented for secure API access. Nodemailer is used to handle email services.

Frontend (NextJS)
The frontend is built with NextJS v15, styled with shadcn/UI components. It is optimized for server-side rendering and frontend authentication.

Micro-Frontend with Turborepo
Using Turborepo, the project supports a micro-frontend architecture, enabling shared libraries and configurations across apps.

Scripts

- pnpm dev - Starts both the backend and frontend in development mode.
- pnpm build - Builds both the backend and frontend for production.
- pnpm lint - Lints all code in the repository.
- pnpm format - Formats the codebase according to the pre-configured rules.

Environment Variables
To configure environment variables:

Copy the .env.example file:

```shell
cp .env.example .env
```

Update the values in .env with your configuration details, such as database credentials and JWT secret.
Contributing
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
