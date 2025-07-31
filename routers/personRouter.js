const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.get('/person', async (req, res)=>{
    try{
        const response = await Person.find();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/person/:professiontype', async (req, res)=>{
    try{
        const professiontype = req.params.professiontype;
        if( professiontype == 'chef' || professiontype == 'waiter' || professiontype == 'manager') {
            const response = await Person.find({profession : professiontype});
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error : 'Invalid profession type for this field'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.post('/person', async function(req, res) {
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(400).json({error: 'Internal Server Error...'})
    }
})

router.put('/person/:id', async (req, res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true,
            runValidators: true
        });

        if(!response){
             return res.status(404).json({error :"invalid Id"});
        }
        console.log('Data updated successfully...');
        res.status(200).json(response);        
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"});
    }
})

module.exports = router;