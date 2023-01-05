# Technologies

The following technologies were used to create the combustible API:

- Language: Node.js
- Web framework: Express
- Database: MongoDB
- ORM: Mongoose
- Authentication: JWT

The combustible API was developed using Node.js, a popular JavaScript runtime built on Chrome's V8 engine. The API's web server and routing was handled by the Express framework, which provides a simple and flexible way to build web applications and APIs.

To store data, the API uses MongoDB, a NoSQL database that allows for the storage of large amounts of data in a JSON-like format. The Mongoose ORM (Object-Relational Mapping) library was used to interact with the MongoDB database, providing a simple and powerful way to work with the data.

For authentication, the API uses JSON Web Tokens (JWTs) to verify the identity of users making requests. JWTs are a widely used industry standard for secure and scalable authentication.

# Directory structure

![ds](https://i.ibb.co/w7NgQqJ/Screenshot-from-2023-01-05-22-05-21.png)

The controllers directory contains the logic for handling HTTP requests and interacting with the database. It is organized into subdirectories for different actions, such as login, read, and update. Within each subdirectory, there are separate files for station-owner and vehicle-owner types of users.

The models directory contains the data models for the API, defining the structure of the data stored in the database. There are separate models for station-owner and vehicle-owner users.

The routes directory contains the definitions for the API's endpoints and the corresponding controller functions. There are separate files for different actions, such as login, read, and update.

The index.js file is the entry point for the API and sets up the server and routes. The index.test.js file contains the test cases for the API.

The package.json and package-lock.json files contain the dependencies and metadata for the API. The README.md file contains documentation for the API.

# Endpoints

The combustible API provides the following endpoints:

`POST /signup/station-owner`

This endpoint is used to register station owners.It accepts a JSON payload containing the following fields:

- DEALER :(required, string) The station name.

- EMAIL :(required, string) The email address of the station.

- CONTACT :(required, string) The contact number of the station.

- PROVINCE :(required, string) The province of the station.

- DISTRICT :(required, string) The district of the station.

- LOCATION :(required, string) The location of the station.

- ARRIVALTIME :(required, string)  The fuel arrival time.

- FINISHTIME :(required, string) The fuel finish time.

- DIESEL :(required, number) The diesel capacity.

- PETROL : (required, number) The petrol capacity.

- PASSWORD : (required, string) The password.

- QUEUE : (required, array) The fule queue.

`POST /signup/vehicle-owner`

This endpoint is used to register vehicle owners.It accepts a JSON payload containing the following fields:

- EMAIL :(required, string) The email address of the user.

- CONTACT :(required, string) The contact number of the user.

- PROVINCE :(required, string) The province of the user.

- DISTRICT :(required, string) The district of the user.

- LOCATION :(required, string) The location of the user.

- FIRSTNAME :(required, string) The first name of the user.

- LASTNAME :(required, string) The last name of the user.

- PASSWORD : (required, string) The password.

- VEHICLE : (required, enum) The vehicle type ['BIKE', '3WHEEL', 'CAR', 'VAN', 'LORRY', 'LAND VEHICLE'].

- FUEL : (required, enum) The fuel type ['DIESEL', 'PETROL'].

`POST /login/station-owner`

This endpoint is used for station owner login.It accepts a JSON payload containing the following fields:

- EMAIL: (required, string) The email address of the user.

- PASSWORD: (required, string) The password for the user.

`POST /login/vehicle-owner`

This endpoint is used for vehicle owner login.It accepts a JSON payload containing the following fields:

- EMAIL: (required, string) The email address of the user.

- PASSWORD: (required, string) The password for the user.

`GET /logout`

This endpoint is used for logging out. It does not accept any payload.

`GET /read/station-owner`

This endpoint is used to locate all station owners. It does not accept any payload.

`GET /read/vehicle-owner`

This endpoint is used to locate all vehicle owners. It does not accept any payload.

`GET /readone/station-owner`

This endpoint is used to locate a single station owner. It accepts a URL query parameter id containing the ID of the user to retrieve.

`GET /readone/vehicle-owner`

This endpoint is used to locate a single vehicle owner. It accepts a URL query parameter id containing the ID of the user to retrieve.

`POST /update/station-owner`

This endpoint is used to update the details of a station owner. It accepts a JSON payload containing the following fields:

- DEALER :(required, string) The station name.

- EMAIL :(required, string) The email address of the station.

- CONTACT :(required, string) The contact number of the station.

- PROVINCE :(required, string) The province of the station.

- DISTRICT :(required, string) The district of the station.

- LOCATION :(required, string) The location of the station.

- ARRIVALTIME :(required, string)  The fuel arrival time.

- FINISHTIME :(required, string) The fuel finish time.

- DIESEL :(required, number) The diesel capacity.

- PETROL : (required, number) The petrol capacity.

`POST /update/vehicle-owner`

- EMAIL :(required, string) The email address of the user.

- CONTACT :(required, string) The contact number of the user.

- PROVINCE :(required, string) The province of the user.

- DISTRICT :(required, string) The district of the user.

- LOCATION :(required, string) The location of the user.

- FIRSTNAME :(required, string) The first name of the user.

- LASTNAME :(required, string) The last name of the user.

- PASSWORD : (required, string) The password.

- VEHICLE : (required, enum) The vehicle type ['BIKE', '3WHEEL', 'CAR', 'VAN', 'LORRY', 'LAND VEHICLE'].

- FUEL : (required, enum) The fuel type ['DIESEL', 'PETROL'].

`POST /join`

This endpoint is used by a vehicle owner to join the fuel queue.It accepts a URL query parameter id containing the ID of the station.It accepts a JSON payload containing the following fields:

- USERNAME : (required, string)

- VEHICLE : (required, string)

- FUEL : (required, string)

- QTY : (required, number)

- USER_ID :(required, string)

- QUEUE : (required, string)

`POST /exists/after`

This endpoint is used by a vehicle owner to exist after the fuel queue. It accepts a JSON payload containing the following fields:

- id :(required, string) The station id.

- username :(required, string)

- qty :(required, number)

- fuel :(required, string)

- user_id :(required, string) The user id.

`POST /exists/before`

This endpoint is used by a vehicle owner to exist after the fuel queue. It accepts a JSON payload containing the following fields:

- id :(required, string) The station id.

- username :(required, string)

- user_id :(required, string) The user id.

`POST /verify`

This endpoint is used for authorization purposes. It accepts a JSON payload containing a token field with the authorization token.



