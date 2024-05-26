const express = require('express');
const router = express.Router();

const createBookmarkApi = require("../controller/CreateBookmark");

// Define routes
router.post('/create-bookmark', createBookmarkApi.createBookmark);

// Export router
module.exports = router;
