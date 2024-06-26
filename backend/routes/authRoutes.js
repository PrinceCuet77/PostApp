const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/authController');
// const User = require('../models/user');

const router = express.Router();

// POST /api/v1/signup
router.put(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('name').trim().not().isEmpty(),
  ],
  authController.signup
);

// POST /login
router.post('/login', authController.login);

module.exports = router;
