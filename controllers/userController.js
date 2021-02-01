const express = require('express');
let router = express.Router();

let User = require('../models/user');

router.get('/', (req, res) => {
    User.find((error, docs) => {
        if (!error) {
            res.send(docs);
        }else {
            console.log('Error in retriving Users: ' + JSON.stringify(error, undefined, 2));
        }
    });
});

module.exports = router;