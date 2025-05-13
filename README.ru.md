<p align="right">
  <a href="README.md"><img src="https://img.shields.io/badge/English-blue?style=for-the-badge&logo=github" alt="English"></a>
</p>

# Nest Assistant Bot Constructor

Бэкенд-сервис для создания, управления и запуска AI-ассистентов (Claude, OpenAI и др.) с интеграцией Telegram, поддержкой файлов и векторных хранилищ.  


![Лицензия](https://img.shields.io/badge/license-MIT-blue)
![Сборка](https://img.shields.io/badge/build-passing-brightgreen)
![Node](https://img.shields.io/badge/node-%3E=18.0.0-blue)
![Docker](https://img.shields.io/badge/docker-ready-blue)

## Оглавление
- [Описание](#описание)
- [Требования](#требования)
- [Установка](#установка)
- [Использование](#использование)
- [Лицензия](#лицензия)
- [FAQ](#faq)
- [Changelog](#changelog)

## Описание

Этот проект предоставляет бэкенд для создания и управления AI-ассистентами с возможностями:
- Поддержка Claude, OpenAI и других LLM
- Интеграция с Telegram-ботом
- Загрузка и хранение файлов
- Векторное хранилище (семантический поиск)
- Модульная архитектура (NestJS)
- Prisma ORM с PostgreSQL

![Пример архитектуры](screenshot.png)

## Требования

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker (для базы данных и деплоя)
- PostgreSQL >= 12

## Установка

### Файлы окружения

Примерные файлы окружения находятся в папке `envs/` (например, `envs/.env.production`).
Скопируйте нужный файл в корень проекта как `.env` и отредактируйте его при необходимости.

```bash
git clone https://github.com/your-org/nest-assistant-bot-constructor.git
cd nest-assistant-bot-constructor
npm install
cp envs/.env.production .env
# Отредактируйте .env при необходимости
```

Выполните миграции базы данных:

```bash
npx prisma migrate deploy
```

## Использование

Запуск сервера в режиме разработки:

```bash
npm run start:dev
```

Или запуск через Docker Compose:

```bash
docker-compose up --build
```

Пример использования API (REST):

```http
POST /assistants
{
  "name": "Claude Assistant",
  "provider": "claude",
  "config": { ... }
}
```

Интеграция с Telegram-ботом:  
Укажите токен Telegram в `.env` и запустите бота.

## Лицензия

Проект распространяется под лицензией [MIT](LICENSE).

---

## FAQ

**В:** Как добавить нового AI-провайдера?  
**О:** Реализуйте новый сервис в `src/services/` и зарегистрируйте его в модуле.

## Changelog

Смотрите [CHANGELOG.md](CHANGELOG.md) для истории изменений.

---

**Поддерживайте README в актуальном состоянии. Для переводов используйте отдельные файлы (например, `README.ru.md`).**