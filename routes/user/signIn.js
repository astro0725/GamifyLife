const express = require('express');
const router = express.Router();
const { signInUser } = require('../controllers/userAuth');

// GET request to render the signin page
router.get('/', (req, res) => {
    try {
        res.render('signin');
    } catch (error) {
        console.error("Signin Error:", error);
    }
});

// POST request to handle the form submission
router.post('/', async (req, res) => {
    try {
        await signInUser(req.body.email, req.body.password);
        res.status(200).send('User signed in successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;