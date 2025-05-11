**_📋 Overview_** :

A fullstack (MERN stack) project with basic CRUD implications.

## Live Demo: ###
https://mern-project-qtj7.onrender.com

## 📦 Tech Stack

**Frontend**:

- React
- ChakraUI
- Zustand

**_Backend_**:

- Node.js
- Express.js
- MongoDB
- Mongoose

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kundanpdl/todolist-react.git
```

```bash
cd todolist-react
```

### 2. Install Backend Dependencies

Make sure you have Node.js installed and run:
In root folder:

```bash
npm init -y
```

```bash
npm install mongoose express dotenv
```

```bash
npm install nodemon -D
```

(-D is used to make nodemon a dev dependency, as it is not needed in prod.)

### 3. Install Frontend Dependencies

First get in correct folder:

```bash
cd frontend
```

Then run:

```bash
npm create vite@latest .
```

Install ChakraUI (Note: This is the version 2 of ChakraUI and not the latest one.):

```bash
npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
```

Install ChakraUI icons and React icons:

```bash
npm i @chakra-ui/icons
```

```bash
npm i react-icons
```

Install Zustand (used for client-side global state management):

```bash
npm i zustand
```

### 3. How To Run The Application Locally

You will need to run both backend and frontend using the terminal.

To run backend server, first cd into the root directory (mern-project):

```bash
cd mern-project
```

OR

```bash
cd ..
```

Depending on which directory you are in currently. If you want to check which directory you are in, you can use:

```bash
ls
pwd
```

When you are in the root directory, run:

```bash
npm run dev
```

Note: You do not need to run node or nodamon to run the backend server as a script is already in place. You can find it in package.json folder inside the root directory (not the frontend one, there are two of them).

Then, you will need to cd into frontend and run the same command:

```bash
npm run dev
```

You should be able to run the application locally now and access it via http://localhost:5173. (Note: The port number 5173 is generally used while deploying the frontend of the application locally. In case the port number is different, you can check your terminal and access the one displayed. Same thing in case of backend server as well, it is generally 8000 if available, or the one displayed on your console.)

On a final note, .env file with URI for MongoDB is not included in this repository due to security issues. You will need to create a MongoDB cluster and create your own .env file. It should look something like:

```bash
MONGO_URI=<your mongodb connection string>
```

Your connection string should have collection name set to 'products' right before the '?'. For example:

```bash
MONGO_URI=mongodb+srv://<username>:<password>@<clusterName>.uga6frq.mongodb.net/<tableName>?retryWrites=true&w=majority&appName=<clusterName>
```
