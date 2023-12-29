const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync();

app.use('/static', express.static(path.join(__dirname, 'Views')));

app.use('/users', userRoutes);

app.get('/users/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'Views', 'signup.html'));
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000/users/signup}`);
});
