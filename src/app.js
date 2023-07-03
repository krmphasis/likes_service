const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Routes
const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');
app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
