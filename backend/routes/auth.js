// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');
const {auth} = require('../middleware/auth');

// in routes: backend/routes/authRoutes.js
router.get('/me', auth, (req, res) => {
   try {
    res.json({ id: req.user.id, role: req.user.role });
  } catch (err) {
    console.error("❌ [AUTH /me] Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});


// POST /api/auth/register
router.post('/register',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('role').notEmpty()
  ],
  register
);

// POST /api/auth/login
router.post('/login', login);

module.exports = router;