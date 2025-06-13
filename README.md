# react-js-dotnet-api

Full-stack project with a backend in ASP.NET Core 8, MySQL database, and a React.js frontend (not included in this repository). The entire stack is containerized with Docker to facilitate development, deployment, and ensure consistency across environments.

## Features

-   **RESTful API** with ASP.NET Core 8
-   **JWT Authentication** with refresh token
-   **API Versioning** using Asp.Versioning.Mvc
-   **HATEOAS** in API responses
-   **File upload and download**
-   **Swagger documentation**
-   **Database migration** with Evolve and SQL scripts
-   **Logging** with Serilog

## CI/CD Integration

This project uses **GitHub Actions** for continuous integration and automated testing.  
There are two main workflows located in `.github/workflows/`:

-   **dotnet.yml**: Runs build and automated tests for the ASP.NET Core backend whenever changes are made in the `server/` folder.
-   **react.yml**: Runs build and automated tests for the React frontend whenever changes are made in the `client/` folder.

These workflows are triggered automatically on every push or pull request, ensuring code quality for both parts of the project.

## Project Structure

The project structure was recently reorganized to improve maintainability and scalability. Below is an overview of the main directories and their purposes:

```
.
├── LICENSE
├── README.md
├── .github/
│   └── workflows/           # CI/CD workflows (GitHub Actions)
│       ├── dotnet.yml       # Backend workflow
│       └── react.yml        # Frontend workflow
├── client/                  # React frontend
│   ├── public/              # Static files and index.html
│   ├── src/                 # React source code (components, pages, hooks, etc.)
│   ├── package.json         # Frontend dependencies and scripts
│   ├── tsconfig.json        # TypeScript configuration (if using TypeScript)
│   └── ...                  # Other config files (e.g., .env, README.md)
└── server/
    ├── .gitignore
    └── RestWithASPNETErudio/
        ├── RestWithASPNETErudio.sln
        └── RestWithASPNETErudio/
            ├── appsettings.json                # Main configuration file
            ├── appsettings.Development.json    # Development-specific configs
            ├── Program.cs                      # Application entry point
            ├── Controllers/                    # API controllers
            ├── Business/                       # Business logic layer
            ├── Repository/                     # Data access layer
            ├── Model/                          # Domain models
            ├── Data/                           # Database context and related classes
            ├── db/
            │   ├── migrations/                 # Database migration scripts
            │   └── dataset/                    # Seed data scripts
            ├── Services/                       # Service classes
            ├── Hypermedia/                     # HATEOAS support
            ├── Configurations/                 # Custom configuration classes
            ├── UploadDir/                      # Directory for uploaded files
            └── ci/                             # Continuous integration scripts (e.g., init_database.sh)
```

### Directory Overview

**client/**

-   **public/**: Static files and main HTML.
-   **src/**: React components, pages, hooks, and main application logic.
-   **package.json**: Frontend dependencies and scripts.
-   **tsconfig.json**: TypeScript configuration (if applicable).

**server/RestWithASPNETErudio/RestWithASPNETErudio/**

-   **Controllers/**: Handles HTTP requests and responses.
-   **Business/**: Business logic and service interfaces.
-   **Repository/**: Data access and repository patterns.
-   **Model/**: Data models/entities.
-   **Data/**: Database context and related infrastructure.
-   **db/migrations/**: SQL scripts for database schema migrations.
-   **db/dataset/**: SQL scripts for populating initial data.
-   **Services/**: Auxiliary services used across the application.
-   **Hypermedia/**: HATEOAS for API responses.
-   **Configurations/**: Custom configuration and settings classes.
-   **UploadDir/**: Stores uploaded files.
-   **ci/**: Scripts for CI/CD and database initialization.

## How to Run

### Prerequisites

-   [.NET 8 SDK](https://dotnet.microsoft.com/download)
-   [MySQL](https://www.mysql.com/)
-   [Docker](https://www.docker.com/) (optional)

### Configuration

Edit the connection string in [`appsettings.json`](server/RestWithASPNETErudio/RestWithASPNETErudio/appsettings.json):

```json
"MySQLConnection": {
  "MySQLConnectionString": "Server=localhost;DataBase=mydatabase;Uid=root;Pwd=123456"
}
```

### Database Migration

Migration scripts are in `db/migrations` and seed data in `db/dataset`.

To run migrations manually:

```sh
bash server/RestWithASPNETErudio/RestWithASPNETErudio/ci/init_database.sh
```

Or let the application migrate automatically when starting in development mode.

### Running the API

```sh
cd server/RestWithASPNETErudio/RestWithASPNETErudio
dotnet run
```

The API will be available at `https://localhost:5001`.

### API Documentation

Access Swagger at:

```
https://localhost:5001/swagger
```

## Main Endpoints

-   **Authentication:**

    -   `POST /api/auth/v1/signin`
    -   `POST /api/auth/v1/refresh`
    -   `GET /api/auth/v1/revoke`

-   **People:**

    -   `GET /api/person/v1/{id}`
    -   `GET /api/person/v1/{sortDirection}/{pageSize}/{page}`
    -   `POST /api/person/v1`
    -   `PUT /api/person/v1`
    -   `PATCH /api/person/v1/{id}`
    -   `DELETE /api/person/v1/{id}`

-   **Books:**

    -   `GET /api/book/v1/{id}`
    -   `GET /api/book/v1/{sortDirection}/{pageSize}/{page}`
    -   `POST /api/book/v1`
    -   `PUT /api/book/v1`
    -   `DELETE /api/book/v1/{id}`

-   **Files:**
    -   `POST /api/file/v1/uploadFile`
    -   `POST /api/file/v1/uploadMultipleFiles`
    -   `GET /api/file/v1/downloadFile/{fileName}`

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
