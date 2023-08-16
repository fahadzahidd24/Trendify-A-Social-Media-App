import Post from "../../models/post.js";

const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        if (!posts)
            return res.status(404).json({ success: false, message: "No Posts Found." });
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export default getFeedPosts;