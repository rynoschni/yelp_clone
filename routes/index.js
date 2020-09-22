const express = require('express'),
    router = express.Router(); //First two lines of all routes

const reviewModel = require('../models/reviewModel');


router.get('/', async (req, res, next) => {
    const reviewData = await reviewModel.getAll();
    // const statusData = await languageModel.getAllStatus();
    
    return res.render('template', {
        locals: {
            title: 'My Favorite Restaurants',
            data: reviewData,
            is_logged_in: req.session.is_logged_in,
            // statusData: statusData,
        },
        partials: {
            partial: 'partial-index'
        }
        })
});

// router.post('/', async (req, res) =>{
//     console.log('req.body:', req.body);
//     for (let key in req.body){
//         console.log("The key is:", key, req.body[key]);
//         await languageModel.updateStatus(key, req.body[key]);
//     }
//     renderPage(res);
// });

module.exports = router;  //last line of all routes