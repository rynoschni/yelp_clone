const express = require('express'),
    router = express.Router(); //First two lines of all routes

router.get('/', (req, res) => {
    res.redirect('/user/login');
});

router.get('/signup', (req, res) => {
    
    res.render('template', {
        locals: {
            title: 'Sign up',
            // statusData: statusData,
        },
        partials: {
            partial: 'partial-signup'
        }
        })
});

router.get('/login', (req, res) => {
    
    res.render('template', {
        locals: {
            title: 'Login',
            
            // statusData: statusData,
        },
        partials: {
            partial: 'partial-login'
        }
        })
});

router.post('/signup', (req, res) =>{
    const { first_name, last_name, email, password } = req.body;
    console.log("Form submission is:", req.body)
    res.sendStatus(200); //temp test send status of ok
});

router.post('/login', (req, res) =>{
    const { email, password } = req.body;
    console.log("Login submission is:", req.body)
    res.sendStatus(200); //temp test send status of ok
});

module.exports = router;  //last line of all routes