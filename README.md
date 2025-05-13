<p align="right">
  <a href="README.ru.md"><img src="https://img.shields.io/badge/Русский-red?style=for-the-badge&logo=github" alt="Русский"></a>
</p>

# Nest Assistant Bot Constructor

Backend service for building, managing, and running AI assistants (Claude, OpenAI, etc.) with Telegram integration, file support, and vector storage.  


![License](https://img.shields.io/badge/license-MIT-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Node](https://img.shields.io/badge/node-%3E=18.0.0-blue)
![Docker](https://img.shields.io/badge/docker-ready-blue)

## Table of Contents
- [About](#about)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [FAQ](#faq)
- [Changelog](#changelog)

## About

This project provides a backend for creating and managing AI assistants with:
- Support for Claude, OpenAI, and other LLMs
- Telegram bot integration
- File upload and storage
- Vector store (semantic search)
- Modular architecture (NestJS)
- Prisma ORM with PostgreSQL

![Architecture Example](screenshot.png)

## Requirements

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker (for database and deployment)
- PostgreSQL >= 12

## Installation

### Environment files

Example environment files are located in the `envs/` directory (e.g., `envs/.env.production`).
Copy the required file to the project root as `.env` and edit it as needed.

```bash
git clone https://github.com/your-org/nest-assistant-bot-constructor.git
cd nest-assistant-bot-constructor
npm install
cp envs/.env.production .env
# Edit .env as needed
```

Run database migrations:

```bash
npx prisma migrate deploy
```

## Usage

Start the development server:

```bash
npm run start:dev
```

Or run with Docker Compose:

```bash
docker-compose up --build
```

Example API usage (REST):

```http
POST /assistants
{
  "name": "Claude Assistant",
  "provider": "claude",
  "config": { ... }
}
```

Telegram bot integration:  
Set your Telegram token in `.env` and start the bot.

## License

This project is licensed under the [MIT](LICENSE) license.

---

## FAQ

**Q:** How do I add a new AI provider?  
**A:** Implement a new service in `src/services/` and register it in the module.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

---

**Keep this README up to date. For translations, use separate files (e.g., `README.ru.md`).**