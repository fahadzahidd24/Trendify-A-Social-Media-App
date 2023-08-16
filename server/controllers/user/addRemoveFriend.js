import User from "../../models/user.js";

const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);
        if (user.friends.include(friendId)) {
            user.friends = user.friends.filter(_id => _id !== friendId);
            friend.friends = friend.friends.filter(_id => _id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await User.save();
        await friend.save();
        res.status(200).json({success:true});
    } catch (err) {
        res.status(404).json({ error: err });
    }
}

export default addRemoveFriend;