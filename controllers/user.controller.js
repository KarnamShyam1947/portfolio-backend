const User = require("../models/users.model");
const bcrypt = require("bcryptjs")

const changePassword = async (req, res) => {
    const { currentPassword, newPassword, reEnterPassword } = req.body;


    if (!currentPassword || !newPassword || !reEnterPassword) {
        return res.status(400).json({ error: 'Current password, new password, and re-entered password are required' });
    }


    if (newPassword !== reEnterPassword) {
        return res.status(400).json({ error: 'New password and re-entered password must match' });
    }

    try {

        const user = await User.findById(req.user.id);
        
        const validPassword = await bcrypt.compare(currentPassword, user.password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Current password is incorrect' });
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error changing password', error });
    }
};

module.exports = {
    changePassword
}
