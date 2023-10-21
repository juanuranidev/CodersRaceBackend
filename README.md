# Coders Race

Coders race is an application to compete with other programmers to see who can write the fastest code. In this application you will be able to race writing functions in the shortest time possible. You will also have a ranking where you will be able to see your position with respect to the rest of the programmers.

My goal with this application was to start my way towards mastering both frontend and backend technologies to be able to work in both environments.

Although the challenge is mainly in the backend, you will find a frontend with a very good UX/UI, good coding practices and a project structure according to the size of the project.

![codersrace](https://github.com/juanuranidev/Freres/assets/96846723/c79c1e20-ee87-4956-9150-76774bd0caf1)

## Technologies

The main technology used for the coders race backend is Node.js and Express. Also, these are some of the most important libraries used:

- nodemon
- standard
- cors
- dotenv
- express
- mongoose

## Project Structure

For the structure of this project I chose a layered structure, where the responsibilities related to each model are separated as follows.

Controllers -> Services -> Repositories

## Features

- Create and get a random code
- Get languages
- Get and create races by user
- Auth
- Leaderboard

## Roadmap

- Language championships
- Achievements
- Friends

## Installation

To install and run the project in your local environment follow the steps below:

### Prerequisites

Make sure you have the following prerequisites installed before you begin:

- [Node.js](https://nodejs.org/) (version 18 or higher)

### Installation steps

1. Clone this repository on your local machine:
   ```bash
   git clone https://github.com/juanuranidev/CodersRaceBackend
   ```
2. Navigate to the project directory:
   ```bash
   cd CodersRaceBackend
   ```
3. Installs the project dependencies:
   ```bash
   npm install
   ```
4. Create a .env file based on .env.example and add your environment variables:
   `PORT_APP`

   `MONGO_URL`

5. Start the development application:
   ```bash
   npm run dev
   ```
6. Open your web browser and visit http://localhost:{your port} to see the application at work.

## About Me

Proactive, creative, limitless and passionate about developing innovative and disruptive applications, on my way to becoming a software developer with a strong background in architecture.

You can see all my information in my portfolio:

https://juanurani.netlify.app/

Also connect with me on LinkedIn:

https://www.linkedin.com/in/juanurani/

## License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
