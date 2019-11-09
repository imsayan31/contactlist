const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');


/* Retrieving Contacts */
router.get('/contacts', (req, res, next) => {
    //res.send('Retreiving the contact list.');
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

/* Adding Contact */
router.post('/contact', (req, res, next) => {
    /* Logic to add contact */
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
    });

    newContact.save((err, contacts) => {
        if(err){
            res.json({msg: 'Failed to add contact.'});
        } else{
            res.json({msg: 'Contact added successfully.'});
        }
    });
});

/* Deleting Contact */
router.delete('/contact:id', (req, res, next) => {
    /* Logic to delete contact */
    Contact.remove({_id: req.param.id}, function(err, result){
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
});


/* Deleting Contact */

module.exports = router;