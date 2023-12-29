const User = require('../models/userModel');

async function createUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const newUser = await User.create({ name, email, password });
    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res
        .status(400)
        .json({
          message: 'Email already exists. Please choose a different one.',
        });
    }

    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  createUser,
};
