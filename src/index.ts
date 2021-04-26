import express = require('express')

const app = express()

app.listen(5000)

app.get('/test', (req, res) => {
    res.send('ok')
})