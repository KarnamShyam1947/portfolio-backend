const User = require("./../models/users.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '6h' }
    );

    res.json({ 
        message: 'Logged in successfully',
        token,
        user
    });

};

module.exports = {
    login
}