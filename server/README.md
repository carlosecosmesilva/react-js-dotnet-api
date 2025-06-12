# ASP.NET Core 8 REST API

This is the backend API for the **react-js-dotnet-api** project, built with ASP.NET Core 8 and MySQL. It provides a RESTful API with JWT authentication, API versioning, HATEOAS, file upload/download, Swagger documentation, and database migrations using Evolve.

## Features

-   **RESTful API** with ASP.NET Core 8
-   **JWT Authentication** with refresh token support
-   **API Versioning** using Asp.Versioning.Mvc
-   **HATEOAS** in API responses
-   **File upload and download**
-   **Swagger documentation**
-   **Database migration** with Evolve and SQL scripts
-   **Logging** with Serilog

## Project Structure

```
server/
└── RestWithASPNETErudio/
    ├── appsettings.json                # Main configuration file
    ├── appsettings.Development.json    # Development-specific configs
    ├── Program.cs                      # Application entry point
    ├── RestWithASPNETErudio.sln        # Solution file
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

## How to Run

### Prerequisites

-   [.NET 8 SDK](https://dotnet.microsoft.com/download)
-   [MySQL](https://www.mysql.com/)
-   [Docker](https://www.docker.com/) (optional, for containerized development)

### Configuration

Edit the connection string in [`appsettings.json`](RestWithASPNETErudio/appsettings.json):

```json
"MySQLConnection": {
  "MySQLConnectionString": "Server=localhost;DataBase=react_net_database;Uid=root;Pwd=123456"
}
```

### Database Migration

Migration scripts are in `db/migrations` and seed data in `db/dataset`.

To run migrations manually:

```sh
bash RestWithASPNETErudio/ci/init_database.sh
```

Or let the application migrate automatically when starting in development mode.

### Running the API

```sh
cd RestWithASPNETErudio
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

This project is licensed under the [Apache 2.0 License](../LICENSE).
