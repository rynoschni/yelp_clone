const express = require('express'),
    router = express.Router(); //First two lines of all routes

const reviewModel = require('../models/postsModel');


router.get('/', async (req, res) => {
    const reviewData = await reviewModel.getAll();
    // console.log(reviewData);
    res.json(reviewData).status(200);
});

module.exports = router;