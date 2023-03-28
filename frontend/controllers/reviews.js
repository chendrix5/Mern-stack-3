const router = require('express').Router()
const Reviews = require('./components/reviews')

router.get('/reviews', (req, res) => {
    res.render('/reviews')
})

router.post('/reviews', (req, res) => {
    console.log(req.body)
    res.send('POST/home')
  })
  



