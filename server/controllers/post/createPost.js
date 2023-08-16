import Post from "../../models/post.js";
import User from "../../models/user.js";

const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();
        const post = await Post.find();
        res.status(201).json({ success: true, data: post });
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export default createPost;