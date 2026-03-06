const jwt = require('jsonwebtoken');

// Mock users for testing (no DB required)
const MOCK_USERS = {
  'admin@example.com': { id: '1', name: 'Admin User', email: 'admin@example.com', password: 'password123', role: 'admin', department: 'Admin' },
  'hod@example.com': { id: '2', name: 'HOD One', email: 'hod@example.com', password: 'password123', role: 'hod', department: 'Emergency' },
  'inventory@example.com': { id: '3', name: 'Inventory Staff', email: 'inventory@example.com', password: 'password123', role: 'inventory_staff', department: 'Stock' },
  'sister@example.com': { id: '4', name: 'Sister InCharge', email: 'sister@example.com', password: 'password123', role: 'sister_incharge', department: 'Emergency' },
  'nurse@example.com': { id: '5', name: 'Nurse A', email: 'nurse@example.com', password: 'password123', role: 'nurse', department: 'Emergency' }
};

exports.register = (req, res) => {
    try {
        const { name, email, password, role, department } = req.body;

        if (MOCK_USERS[email]) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const userId = String(Object.keys(MOCK_USERS).length + 1);
        MOCK_USERS[email] = { id: userId, name, email, password, role, department };

        const payload = {
            user: {
                id: userId,
                role,
                department,
            }
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret_key', { expiresIn: '5h' });
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  try {
    const user = MOCK_USERS[email];
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
        department: user.department,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret_key', { expiresIn: "5h" });

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
