# 👥 User CRUD API

A simple **User CRUD (Create, Read, Update, Delete)** REST API built with **Node.js**, **Express.js**, and **MongoDB**. This project provides endpoints for managing user data efficiently.

---

## 🚀 Features
- ➕ **Create** a new user
- 📖 **Read** user data (single & multiple)
- ✏️ **Update** existing user details
- ❌ **Delete** users
- 📝 Request & Response logging

---

## 🛠️ Technologies Used
- **Node.js** ⚡
- **Express.js** 🚀
- **MongoDB** 🗄️
- **Mongoose** 📦

---

## 📦 Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Rutuja1104/User-Crud-Backend.git
   cd user-crud-api
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment:**
   Ensure MongoDB is running locally and create a `.env` file (optional for DB URI):
   ```env
   PORT=8000
   MONGODB_URI=mongodb://127.0.0.1:27017/youtube-app-1
   ```

4. **Start the Server:**
   ```bash
   npm start
   ```

---

## 📡 API Endpoints

### 1️⃣ Create a User
- **Endpoint:** `POST /api/users`
- **Description:** Create a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully!",
    "user": {
      "_id": "unique_user_id",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30
    }
  }
  ```

### 2️⃣ Get All Users
- **Endpoint:** `GET /api/users`
- **Description:** Retrieve all users.

### 3️⃣ Get User by ID
- **Endpoint:** `GET /api/users/:id`
- **Description:** Retrieve a specific user by ID.

### 4️⃣ Update a User
- **Endpoint:** `PUT /api/users/:id`
- **Description:** Update user details.
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "age": 28
  }
  ```

### 5️⃣ Delete a User
- **Endpoint:** `DELETE /api/users/:id`
- **Description:** Delete a user by ID.

---

## 📂 Project Structure
```
user-crud-api/
├── Routes/
│   └── user.js        # User route handlers
├── middlewares/
│   └── index.js      # Custom middlewares (e.g., logger)
├── connection.js      # MongoDB connection logic
├── app.js            # Application entry point
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

---

## 🤝 Contributing
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature`)
3. **Commit** changes (`git commit -m 'Add feature'`)
4. **Push** to the branch (`git push origin feature/your-feature`)
5. **Open** a Pull Request

---

## 📄 License
Licensed under the **MIT License**.

---

## 📬 Contact
For questions or feedback, reach out at [Rutuja Sahare](mailto:rutujasahre2023@gmail.com)

Happy Coding! 🎉

