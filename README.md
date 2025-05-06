**Project**  
Back-end NestJS + Prisma + MySQL for HDM Todo-List.

---

**1. Stack**  
- **NestJS 10** – modular framework, DI, decorators  
- **Prisma 5** – typed ORM, migrations, DX top-tier  
- **MySQL 5.7/8** – requested DB (Docker image provided)  
- **Yarn 1** – faster installs, workspaces-ready  

---

**2. Quick Start**

```bash
git clone https://github.com/Mehdi-Lahouir/BackEnd_ToDoList.git
cd BackEnd_ToDoList
yarn                       # install

# Start a MySQL container (if you do not have MySQL locally)
docker run -d --name hdm-mysql -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=42316421 \
  -e MYSQL_DATABASE=hdm_todo \
  hdmnetwork/mysql5.7

cp .env.sample .env        # adjust if needed
yarn prisma migrate deploy # create table Task
yarn start:dev             # API on http://localhost:3000

---

**3. REST Endpoints**

| Verb   | Route        | Body example             | Action |
| ------ | ------------ | ------------------------ | ------ |
| GET    | `/tasks`     | –                        | list   |
| POST   | `/tasks`     | `{ "name": "Buy milk" }` | create |
| PATCH  | `/tasks/:id` | `{ "name": "Buy tea" }`  | update |
| DELETE | `/tasks/:id` | –                        | delete |

---

**4.Folder Layout**

backend
├── nest-cli.json
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   │   ├── 20240709213409_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── README.md
├── src
│   ├── AppModule.ts
│   ├── Controllers
│   │   └── TaskController.ts
│   ├── index.d.ts
│   ├── main.ts
│   ├── PrismaService.ts
│   ├── Repositories
│   │   └── TaskRepository.ts
│   ├── ServiceFactory.ts
│   └── UseCase
│       ├── DeleteTask
│       │   └── DeleteTask.ts
│       ├── GetAllTasks
│       │   └── GetAllTasksUseCase.ts
│       ├── SaveTask
│       │   ├── SaveTaskDto.ts
│       │   └── SaveTaskUseCase.ts
│       └── UseCaseFactory.ts
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock

---

**5. Key Design Choices**

Use-case layer isolates business logic (easy tests).

Minimal DTO + manual validation (no class-validator overhead).

Prisma query logging during dev (PrismaService log level query).

Single migration 20240709213409_init (table Task).

---

**6. Useful Scripts**

yarn prisma studio – browse DB quickly

yarn lint – ESLint

yarn test – (placeholder for Jest tests)
