# react-js-dotnet-api

Full-stack project with a backend in ASP.NET Core 8, MySQL database, and a React.js frontend (not included in this repository). The entire stack is containerized with Docker to facilitate development, deployment, and ensure consistency across environments.

## Features

- **RESTful API** with ASP.NET Core 8
- **JWT Authentication** with refresh token
- **API Versioning** using Asp.Versioning.Mvc
- **HATEOAS** in API responses
- **File upload and download**
- **Swagger documentation**
- **Database migration** with Evolve and SQL scripts
- **Logging** with Serilog

## Project Structure

```
.
├── LICENSE
├── README.md
├── .github/
│   └── workflows/
└── server/
    ├── .gitignore
    └── RestWithASPNETErudio/
        ├── RestWithASPNETErudio.sln
        └── RestWithASPNETErudio/
            ├── appsettings.json
            ├── appsettings.Development.json
            ├── Program.cs
            ├── Controllers/
            ├── Business/
            ├── Repository/
            ├── Model/
            ├── Data/
            ├── db/
            │   ├── migrations/
            │   └── dataset/
            ├── Services/
            ├── Hypermedia/
            ├── Configurations/
            ├── UploadDir/
            └── ci/
```

## How to Run

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/) (optional)

### Configuration

Edit the connection string in [`appsettings.json`](server/RestWithASPNETErudio/RestWithASPNETErudio/appsettings.json):

```json
"MySQLConnection": {
  "MySQLConnectionString": "Server=localhost;DataBase=react_net_database;Uid=root;Pwd=123456"
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

- **Authentication:**  
  - `POST /api/auth/v1/signin`  
  - `POST /api/auth/v1/refresh`  
  - `GET /api/auth/v1/revoke`

- **People:**  
  - `GET /api/person/v1/{id}`  
  - `GET /api/person/v1/{sortDirection}/{pageSize}/{page}`  
  - `POST /api/person/v1`  
  - `PUT /api/person/v1`  
  - `PATCH /api/person/v1/{id}`  
  - `DELETE /api/person/v1/{id}`

- **Books:**  
  - `GET /api/book/v1/{id}`  
  - `GET /api/book/v1/{sortDirection}/{pageSize}/{page}`  
  - `POST /api/book/v1`  
  - `PUT /api/book/v1`  
  - `DELETE /api/book/v1/{id}`

- **Files:**  
  - `POST /api/file/v1/uploadFile`  
  - `POST /api/file/v1/uploadMultipleFiles`  
  - `GET /api/file/v1/downloadFile/{fileName}`

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
