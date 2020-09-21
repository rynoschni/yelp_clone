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
            // statusData: statusData,
        },
        partials: {
            partial: 'partial-business'
        }
        })
});

router.post('/:name?', async (req, res) =>{
    const reviewEntryData = await reviewModel.reviewUpdate(req.body.review_entry, req.params.name);
    console.log('Entry Data:', reviewEntryData);
    // for (let key in req.body){
    //     console.log("The key is:", key, req.body[key]);
    //     await reviewModel.updateReview(key, req.body[key]);
    // }
    res.send("ok");
});

module.exports = router;  //last line of all routes