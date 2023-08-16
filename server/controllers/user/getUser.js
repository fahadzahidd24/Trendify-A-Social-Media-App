import User from "../../models/user.js";

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userFound = await User.findById(id);
        if (!userFound)
            return res.status(404).json({ success: false, message: "No User Found with this id" });
        return res.status(200).json({ success: true, data: userFound });
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export default getUser;