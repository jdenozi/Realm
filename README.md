# Realm: End of Era (Currently in development)

![Realm: End of Era](game.gif)

Realm: End of Era is an immersive trading card game set in a fantastical world where players engage in strategic battles, collect powerful cards, and unravel the mysteries of the ancient realms. This game is built using React for the front-end and Node.js for the back-end.

## Features

- **Card Battles**: Experience thrilling one-on-one battles with your customized deck of powerful cards.
- **Card Collection**: Discover and collect a wide variety of unique cards with different abilities and attributes.
- **Strategic Gameplay**: Develop your own tactics, build synergistic decks, and outsmart your opponents.
- **Quests and Adventures**: Embark on epic quests and challenging adventures to earn rewards and unlock new cards.
- **Player Rankings**: Compete against other players and climb the global leaderboards.
- **Community Features**: Engage with a vibrant community of players, trade cards, and participate in tournaments.

## Installation

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

### Clone the Repository
```
git clone https://github.com/jdenozi/realm.git
cd realm-end-of-era
```

### Install Dependencies
```angular2html
npm install
```

### Configuration

Copy the sample configuration file and modify it with your own settings.
```angular2html
cp config/sample.config.js config/config.js
```

### Starting the Development Server
```angular2html
npm start
```


The development server should now be running at http://localhost:3000.

## Project Setup and Deployment Guide

This README documentation provides instructions on how to set up and deploy the application, which includes a MongoDB database and an API service. Additionally, it suggests using a `run.sh` script to launch the entire system.

### Prerequisites

Before proceeding with the setup, make sure you have the following installed:

- Docker: Ensure that Docker is installed and running on your system.
- `.env` File: Create an `.env` file in the project root directory with the necessary environment variables. Example variables may include:
    - `DATABASE_URI`: The URI for connecting to the MongoDB database.
    - `MONGO_USERNAME`: MongoDB username for authentication.
    - `MONGO_PASSWORD`: MongoDB password for authentication.
    - `MONGO_INITDB_DATABASE`: The name of the MongoDB database to be initialized.
    - `MONGO_INITDB_COLLECTION`: The name of the MongoDB collection to be initialized.
    - `MONGO_INITDB_ROOT_USERNAME`: MongoDB root username for initial setup.
    - `MONGO_INITDB_ROOT_PASSWORD`: MongoDB root password for initial setup.
    - `REACT_APP_API_PORT`: Port number for the API service.
- Docker Compose: Make sure you have Docker Compose installed.

### Setup using docker compose

The `docker-compose.yml` file contains the necessary configurations to set up the MongoDB database and API service. The application consists of the following services:

1. `mongo`: This service sets up a MongoDB container using the official `mongo:latest` image. The database will be initialized with the provided environment variables from the `.env` file.

2. `mongo-seed`: This service builds a custom Docker image using the `./realm-db` directory and the `Dockerfile` within it. It depends on the `mongo` service, ensuring that the database is running before running the seed script. The seed script populates the MongoDB database with initial data.

3. `api`: This service builds a custom Docker image using the `./realm-api` directory. It depends on the `mongo` service to ensure the database is accessible before starting the API. The service exposes port 7070 for the API, and the environment variables required for the API are loaded from the `.env` file.

4. `networks`: This section defines a custom network called `realm` to facilitate communication between the containers. It is set as an external network.

### Setup Instructions

Follow these steps to set up and deploy the application:

1. Create the `.env` file: Ensure you have all the required environment variables defined in the `.env` file in the project root directory.

2. Build and run the services: Open a terminal or command prompt, navigate to the project directory containing the `docker-compose.yml` file, and run the following command:

   ```bash
   docker-compose up --build -d

This command will build the custom Docker images for the mongo-seed and api services, and then run all the services in detached mode (-d)

### Local setup 
Using the run.sh script from the root directory simplifies the process of setting up the entire application by automating the steps required to start the MongoDB database, 
API service, and client application. The script combines the necessary commands to run the docker-compose setup for the database and API and then launches the client application.


## Contributing

We welcome contributions from the community! To contribute to Realm: End of Era, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and ensure that the code passes all tests.
4. Commit your changes and push the branch to your forked repository.
5. Open a pull request in the main repository.

## License

Ream: End of the Era is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](LICENSE.md).

This means that you are free to use, distribute, and share the game for non-commercial purposes only. You must give appropriate credit to the original authors and cannot make any modifications or create derivative works based on the game without explicit permission.

For more details about the license, please refer to the [LICENSE.md](LICENSE.md) file.

## Contact

If you have any questions or suggestions, feel free to reach out to us:

- Website: [https://www.realmendofera.com](https://www.realmendofera.com)
- Email: [contact@realmendofera.com](mailto:contact@realmendofera.com)
- Twitter: [@RealmGame](https://twitter.com/RealmGame)

We hope you enjoy playing Realm: End of Era! May the cards be in your favor as you venture into the realms of magic and adventure!
