const express = require('express');
const router = express.Router();

// retrieve records
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

// retrieve record by id
router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

// insert record
router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

// update record
router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

// remove bootcamp
router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;