const { response } = require('express');
const bcrypt = require('bcryptjs');
const express = require('express'),
    router = express.Router(), //First two lines of all routes
    UserModel = require('../models/usersModel');

router.get('/', (req, res) => {
    res.redirect('/user/login');
});

router.get('/signup', (req, res) => {
    
    res.render('template', {
        locals: {
            title: 'Sign up',
            is_logged_in: req.session.is_logged_in,
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
            is_logged_in: req.session.is_logged_in,
            // statusData: statusData,
        },
        partials: {
            partial: 'partial-login'
        }
        })
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

router.post('/signup', (req, res) =>{
    const { first_name, last_name, email, password } = req.body;
    //Salt and hash our password!
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const userInstance = new UserModel(null, first_name, last_name, email, hash);
    userInstance.save().then(response => {
        if (response.id !== undefined) {
            res.redirect('/user/login');
        } else{
            res.redirect('user/signup');
        }

    })
});

router.post('/login', (req, res) =>{
    const { email, password } = req.body;
    const userInstance = new UserModel(null, null, null, email, password);
    userInstance.login().then(response => {
        req.session.is_logged_in = response.isValid;
        if (!!response.isValid) {
            const { first_name, last_name, user_id } = response;
            req.session.first_name = first_name;
            req.session.last_name = last_name;
            req.session.user_id = user_id;
            res.redirect('/')
        } else {
            res.redirect('user/signup');
        }
            })
});



module.exports = router;  //last line of all routes