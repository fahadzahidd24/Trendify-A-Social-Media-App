import User from "../../models/user.js";

const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const userFound = await User.findById(id);
        if (!userFound)
            return res.status(404).json({ success: false, message: "No User Found with this id" });
        const friends = await Promise.all(
            userFound.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return { _id, firstName, lastName, occupation, location, picturePath }
        });
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export default getUserFriends;