import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/user.js';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email });
        if (!userFound)
            return res.status(404).json({ success: false, message: "No User With This Email Found" });
        const match = await bcrypt.compare(password, userFound.password);
        if (!match)
            return res.status(401).json({ success: true, message: "Invalid Credentials" });
        const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET_KEY);
        return res.status(200).json({ success: true, message: "Logged In Successfully", token: token });
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
}

export default login;