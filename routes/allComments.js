const express = require('express'),
    router = express.Router(); //First two lines of all routes

const commentsModel = require('../models/commentsModel');


router.get('/', async (req, res) => {
    const commentData = await commentsModel.getAll();
    // console.log(reviewData);
    res.json(commentData).status(200);
});

module.exports = router;