# 🌍 Mini Travel Package Platform

A simple travel package listing platform with user authentication, travel package listings, and a booking simulation. This project uses **React.js**, **Next.js**, **Tailwind CSS** for the frontend, and **Node.js** with **MongoDB** for the backend.

## 🚀 Features
- User Authentication with hardcoded credentials.
- List of travel packages fetched from MongoDB.
- Booking simulation with a "Book Now" button.
- Responsive and interactive UI built with Tailwind CSS.

## 📂 Project Structure
```
.
└── backend
    ├── server.js
    ├── .env
    ├── postman
    │   └── findmytrip.postman_collection.json
    ├── controllers
    │   └── packageControllers.js
    ├── routes
    │   └── packageRoutes.js
    ├── models
    │   └── Package.js
    └── config
        └── db.js
```

## 🛠️ Tech Stack
- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **API Client**: Axios, Postman

## 🔧 Setup Instructions

### A. For Backend

### 1. Clone the Backend Repository
```bash
git clone --single-branch --branch backend https://github.com/HarshP2109/Travel-Package
```

### 2. Set Up
Navigate to the `backend` directory:

```bash
cd Travel-Package
```

#### Install Dependencies
```bash
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI= Your mongodb url
```

#### Seed the Database with Travel Packages
You can use Postman or MongoDB Compass to add travel packages or directly seed using a script.

#### Run the Backend Server
```bash
npm start
```

The backend server should be running at [http://localhost:5000](http://localhost:5000).


### B. Testing with Postman
To test the API endpoints, use the provided **Postman collection**.

#### Importing Postman Collection
1. Open Postman.
2. Click on `Import` in the top left corner.
3. Select the `findmytrip.postman_collection.json` file (provided in the backend branch inside postman folder).
4. Click `Import`.

#### Postman Collection: `/api/booked` Endpoint
- **Method**: `POST`
- **URL**: `http://localhost:5000/api/booked`
- **Headers**:
  - `Content-Type: application/json`
- **Body (JSON)**:
  ```json
  {
    "packageId": 1,
    "name": "Beach Escape",
    "location": "Maldives",
    "price": 1200
  }
  ```

### C. Sample API Endpoints
- **Get all packages**: 
  - **GET** `http://localhost:5000/api/packages`
- **Add a new package**: 
  - **POST** `http://localhost:5000/api/packages`
  - **Body (JSON)**:
    ```json
    {
      "name": "Mountain Adventure",
      "location": "Switzerland",
      "description": "A thrilling trip in the Alps.",
      "price": 900
    }
    ```

## 📦 Sample Data for Seeding
Use the following JSON data to add initial travel packages:

```json
[
  {
    "name": "Beach Paradise",
    "location": "Hawaii",
    "description": "Relax on the pristine beaches of Hawaii.",
    "price": 1500
  },
  {
    "name": "Desert Safari",
    "location": "Dubai",
    "description": "Experience the thrill of dune bashing.",
    "price": 700
  },
  {
    "name": "City Lights",
    "location": "New York",
    "description": "Explore the bustling streets of NYC.",
    "price": 1300
  },
  {
    "name": "Historic Journey",
    "location": "Rome",
    "description": "Dive into the rich history of Rome.",
    "price": 1100
  },
  {
    "name": "Nature Escape",
    "location": "New Zealand",
    "description": "Experience untouched natural beauty.",
    "price": 2000
  }
]
```

## 🛠️ Tools & Resources
- Node.js
- MongoDB
- Postman

## ✨ Credits
Developed by [Harsh](https://github.com/HarshP2109).
