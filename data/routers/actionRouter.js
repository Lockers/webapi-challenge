const express = require('express');
const db = require('../helpers/actionModel');
const router = express.Router();
router.use(express.json())

router.get('/actions/:id', (req, res) => {
    db.get(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server error' })
        })

})

router.post('/actions/:id', (req, res) => {
    const newAction = {
        project_id: req.params.id,
        description: req.body.description,
        notes: req.body.notes
    }
    console.log(newAction)
    db.insert(newAction)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' })
        })

})

router.put('/actions/:id', (req, res) => {
    const updatedAction = {
        id: req.params.id,
        description: req.body.description,
        notes: req.body.notes,
        completed: req.body.completed
    }
    db.update(req.params.id, updatedAction)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' })
        })
})

router.delete('/actions/:id', (req, res) => {
    db.remove(req.params.id)
        .then(response => {
            res.status(204).end()
        })
        .catch(err => {
            res.status(500).json({ Error: 'Internal Server Error' })
        })
})

module.exports = router;