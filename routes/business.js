const db = require('../models/con')
const express = require('express'),
    router = express.Router(); //First two lines of all routes

const reviewModel = require('../models/reviewModel');


router.get('/:name?', async (req, res) => {
    const singleData = await reviewModel.getOne(req.params.name);
    console.log(singleData)
    // const statusData = await languageModel.getAllStatus();
    
    return res.render('template', {
        locals: {
            title: 'My Favorite Restaurants',
            data: singleData,
            is_logged_in: req.session.is_logged_in,
            // statusData: statusData,
        },
        partials: {
            partial: 'partial-business'
        }
        })
});

router.post('/:name?', async (req, res) =>{
    // const reviewer_id = req.session.user_id
    const{title,review,stars,restaurant_id} = req.body;
    
    await reviewModel.addReview(title, review, stars, restaurant_id);
    console.log(req.body);
    // console.log(req.session.user_id);
    res.redirect('back');
});

module.exports = router;  //last line of all routes