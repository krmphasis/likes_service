const Post = require('../models/post');

// Store Like event
const storeLikeEvent = async (userId, contentId) => {
  try {
    // Your code to store the like event in the database
    // For example, using the Post model defined in models/post.js
    await Post.create({
      user_id: userId,
      content_id: contentId,
    });
    console.log('Like event stored successfully.');
  } catch (error) {
    console.error('Error storing like event:', error);
    throw new Error('Failed to store like event.');
  }
};

// Check if user has liked a particular content
const checkUserLikedContent = async (userId, contentId) => {
  try {
    // Your code to check if the user has liked the content
    // For example, using the Post model and querying the database
    const like = await Post.findOne({
      where: {
        user_id: userId,
        content_id: contentId,
      },
    });
    const hasLiked = !!like; // Convert to boolean value
    return hasLiked;
  } catch (error) {
    console.error('Error checking user like:', error);
    throw new Error('Failed to check user like.');
  }
};

// Total likes for a content
const getTotalLikesForContent = async (contentId) => {
  try {
    // Your code to get the total number of likes for the content
    // For example, using the Post model and counting the number of rows
    const totalLikes = await Post.count({
      where: {
        content_id: contentId,
      },
    });
    return totalLikes;
  } catch (error) {
    console.error('Error getting total likes:', error);
    throw new Error('Failed to get total likes.');
  }
};

module.exports = {
  storeLikeEvent,
  checkUserLikedContent,
  getTotalLikesForContent,
};
