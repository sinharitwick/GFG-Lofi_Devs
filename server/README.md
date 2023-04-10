// README.md
# Mern Chat App
### Introduction
Mern chat App is an API for building a chat web application using Socket.io and have store the user chat information in MongoDB.
### Project Support Features
* Users can signup and login to their accounts
* Users can have one-one conversation with the User of the application
* Authenticated users can create a Group chat.
### Installation Guide
* Clone this repository [here](https://github.com/Bikdistinct/chatAppi.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.
### Usage
* Run npm start to start the application.
* Connect to the API using Postman on port 5000.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/user | To sign up a new user account |
| POST | /api/user/login | To login an existing user account |
| POST | /api/chat | To access Chat  |
| GET | /api/chat | To fetchChat|
| POST | /api/chat/group | To create a group chat |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
* [Socket.io](https://socket.io/)Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.
### Authors
* [Bikramjit Das](https://github.com/Bikdistinct)

