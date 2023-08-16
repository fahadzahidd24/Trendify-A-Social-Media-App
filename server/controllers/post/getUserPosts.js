import Post from "../../models/post.js";

const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const userPosts = await Post.find({ userId });
        if (!userPosts)
            return res.status(404).json({ success: false, message: "No Posts Found." });
        res.status(200).json({success:true,data:userPosts});
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export default getUserPosts;