const express = require('express');
const { loginController, RegisterController, getUsers } = require('../controllers/userController');

// router object
const router = express.Router();

//  routers

// POST or Login
router.post('/login/:id', loginController );

router.get('/', getUsers)
// POST or Register
router.post('/register', RegisterController );


module.exports = router;