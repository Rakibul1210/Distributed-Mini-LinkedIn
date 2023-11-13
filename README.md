# LinkedIn Backend Microservices Project

## Overview

This GitHub repository contains the source code for a LinkedIn-inspired web application that initially started as a monolith and was later transformed into a microservices architecture. The project is designed to showcase the transition from a single, integrated system to a distributed network of microservices.

## Project Structure

The repository is organized into sub-projects, each representing a separate microservice:

1. **Client:** The front-end user interface with routes for registration, login, home, and notifications.

2. **User Service:** Manages user registration, login, and authentication.

3. **Posts Service:** Handles the creation and retrieval of user posts.

4. **Notification Service:** Manages notifications related to user posts.

5. **Reverse Proxy (Nginx):** Routes all traffic through Nginx and directs requests to the respective microservices.

## Technologies Used

- **Programming Languages:** Node.js & React.js
  
- **Frameworks/Libraries:** Express

- **Database:** MongoDB for user and post data, Object DB (MinIO) for storing images.

- **Containerization:** Docker is used to containerize each microservice.

- **Orchestration:** Docker Compose is employed to orchestrate the services.

## How to Run

1. Clone the repository to your local machine.

2. Navigate to each microservice's sub-directory and follow the provided instructions to build and run the service.

3. Use the provided Docker Compose file to orchestrate the services.

4. Access the web application through the Nginx reverse proxy.

## Additional Notes

- The project assumes a simplified scenario where all users are connected by default, and no additional services like chat or comments are implemented.

- The images uploaded for posts are stored in the Object DB (MinIO).

- For communication between microservices, additional code has been implemented to handle authorization when a user interacts with the post and notification services.

## Learning Resources

If you're new to Docker or want to enhance your skills, consider checking out the following resources:

- [Docker in 100 seconds](link)
- [Docker in 7 easy steps](link)
- [Docker-compose tutorial](link)
- [Nginx official documentation](https://docs.nginx.com/)

Feel free to explore and contribute to the project. Happy coding!
