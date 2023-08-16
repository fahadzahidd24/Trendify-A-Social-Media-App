import Post from "../../models/post.js";

const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        if (!post)
            return res.status(404).json({ success: false, message: "No Post Found" });
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );
        res.status(200).json({ success: true, data: updatedPost })
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export default likePost;