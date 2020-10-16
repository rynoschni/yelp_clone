const express = require('express'),
    router = express.Router(); //First two lines of all routes

const postsModel = require('../models/postsModel');


router.get('/', async (req, res) => {
    const postsData = await postsModel.getOne();
    // console.log(reviewData);
    res.json(postsData).status(200);
});

module.exports = router;