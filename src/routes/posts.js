const express = require('express');
const router = express.Router();
const {
  storeLikeEvent,
  checkUserLikedContent,
  getTotalLikesForContent,
} = require('../controllers/posts');

router.post('/store-like-event', storeLikeEvent);
router.get('/check-user-liked-content', checkUserLikedContent);
router.get('/total-likes-for-content', getTotalLikesForContent);

module.exports = router;
