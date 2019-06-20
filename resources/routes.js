const router = require('express').Router();
const db = require('./models');

router.get('/', (req, res) => {
    db.find()
    .then(contents => {
        contents.length >= 1 ? res.status(200).json({success: true, contents}):
        res.status(404).json({success: false, message: 'Sorry, no contents atm!'})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

router.post('/', (req, res) => {
    return null
})

router.post('/', (req, res) => {
    return null
})

// error middleware
const errorRef = (error) => {
    const hash = Math.random().toString(36).substring(2);
    console.log(hash, error)
    return { message: `Unknown Error, Ref: ${hash}`, error }
}


module.exports = router;