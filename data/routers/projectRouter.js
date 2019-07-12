const validateBody = require('../middleware/middleware.js');
const validateId = require('../middleware/middleware.js')
const express = require('express');
const db = require('../helpers/projectModel');
const router = express.Router();
router.use(express.json())


router.get('/projects/:id', validateId, (req, res) => {
    db.get(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
        res.status(500).json({message: 'Internal Server error' })
    })
    
})

router.get('/projects/:id/actions', validateId, (req, res) => {
    db.getProjectActions(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
})

router.post('/projects', validateBody, (req, res) => {
    db.insert(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
        res.status(500).json({Error: 'Internal server error'})
    })
    
})

router.put('/projects/:id', validateId, validateBody, (req, res) => {
    db.update(req.params.id, req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
        res.status(500).json({error: 'Internal Server Error'})
    })
    
})

router.delete('/projects/:id', validateId, (req, res) => {
    db.remove(req.params.id)
        .then(response => {
            console.log(response)
            res.status(204).end()
    })
        .catch(err => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
})

module.exports = router;