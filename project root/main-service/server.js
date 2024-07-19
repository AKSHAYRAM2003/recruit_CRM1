// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/userRoutes');
// const candidateRoutes = require('./routes/candidateRoutes');
// const errorHandler = require('./middleware/errorHandler');
// const publicApiRoutes = require('./routes/publicApiRoutes');

// const app = express();

// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

// app.use('/api/users', userRoutes);
// app.use('/api/candidates', candidateRoutes);
// app.use('/api/public', publicApiRoutes);

// app.use(errorHandler);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Main service running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const publicRoutes = require('./routes/publicApiRoutes');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api/users', userRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/public', publicRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));