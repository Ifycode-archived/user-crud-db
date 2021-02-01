const express = require('express');
let router = express.Router();
let ObjectId = require('mongoose').Types.ObjectId;

let User = require('../models/user');

/*=========================
    operations for /users
==========================*/

router.get('/', (req, res) => {
    User.find((error, docs) => {
        if (!error) {
            res.send(docs);
        }else {
            console.log('Error retriving Users: ' + JSON.stringify(error, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    });

    newUser.save((error, doc) => {
        if (!error) {
            res.send(doc);
        }else {
            console.log('Error Saving user: ' + JSON.stringify(error, undefined, 2));
        }
    });
});


/*===========================
    operations for /users/id
============================*/

router.get('/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id))
        return res.status(400).send(`No record for given ID : ${id}`);
    
    User.findById(id, (error, doc) => {
        if(!error) {
            res.send(doc);
        }else {
            console.log('Error retrieving user: ' + JSON.stringify(error, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id))
        return res.status(400).send(`No record for given ID : ${id}`);
    
    let resetUser = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    }

    User.findByIdAndUpdate(id, { $set: resetUser }, { new: true },
        (error, doc) => {
            if (!error) {
                res.send(doc);
            }else {
                console.log('Error updating user: ' + JSON.stringify(error, undefined, 2));
            }
        });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id))
        return res.status(400).send(`No record for given ID : ${id}`);
    
    User.findByIdAndRemove(id, (error, doc) => {
        if (!error) {
            res.send(doc);
        }else {
            console.log('Error deleting user: ' + JSON.stringify(error, undefined, 2));
        }
    });
});

module.exports = router;