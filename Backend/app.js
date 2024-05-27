const express = require('express');
const helmet = require('helmet');
const rateLimit = require('./src/config/rateLimit');
const weatherRoutes = require('./src/routes/weather');
const errorHandler = require('./src/middlewares/errorHandler');
const { PORT } = require('./src/config/config');
const app = express();

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(rateLimit);

// Routes
app.use('/api/v1', weatherRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
