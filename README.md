# Food-Delivery-App-By-Using-MERN-Stack

A full-stack web application for food delivery services built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication (Sign up, Log in, and Log out)
- Browse food menus and restaurants
- Add items to the cart and place orders
- Real-time order tracking
- Admin panel for managing restaurants, menu items, and orders
- Responsive design for mobile and desktop

## Technologies Used

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS / Bootstrap (Optional: Mention the CSS framework you used)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Tokens (JWT)
- bcrypt.js (for password hashing)

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v16 or higher recommended)
- MongoDB (local instance or cloud, e.g., MongoDB Atlas)
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/food-delivery-app.git
   cd food-delivery-app
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development servers:
   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend server
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## Project Structure

```
food-delivery-app/
├── backend/
│   ├── config/       # Configuration files (e.g., database, JWT)
│   ├── controllers/  # API route controllers
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── middleware/   # Middleware (e.g., authentication)
│   └── server.js     # Entry point for the backend
├── frontend/
│   ├── public/       # Static files
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # React pages (e.g., Home, Cart, Admin)
│   │   ├── context/    # Context API for state management
│   │   └── App.js      # Main React app file
├── README.md
└── package.json      # Root package.json for the project
```

## API Endpoints

### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Log in a user

### Restaurant Routes
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get a specific restaurant by ID

### Order Routes
- `POST /api/orders` - Place a new order
- `GET /api/orders/:id` - Get order details by ID
- `PUT /api/orders/:id` - Update order status (Admin only)

## Screenshots

Include screenshots of your app to showcase its features. Example:

![Home Page](https://via.placeholder.com/800x400)
![Cart Page](https://via.placeholder.com/800x400)

## Future Enhancements

- Implement payment gateway integration
- Add user reviews and ratings for restaurants
- Push notifications for real-time updates

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contact me if you have any questions or suggestions. Happy coding! 🚀
