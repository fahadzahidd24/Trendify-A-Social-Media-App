import bcrypt from 'bcrypt';
import User from '../../models/user.js';

const register = async(req, res) => {
    try {
        const { firstName, lastName, email, password, friends, picturePath, location, occupation, viewedProfile, impressions } = req.body;
        const userFound = await User.findOne({ email });
        if (!userFound) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                friends,
                picturePath,
                location,
                occupation,
                viewedProfile: Math.floor(Math.random() * 10000),
                impressions: Math.floor(Math.random() * 10000)
            })
            const savedUser = await user.save();
            res.status(201).json({ success: true, data: savedUser });
        }
        else {
            res.status(400).json({ success: false, message: "Email Already Exists" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}

export default register;
