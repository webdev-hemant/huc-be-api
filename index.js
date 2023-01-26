const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (req, res) => {
    res.send({ message: 'its working fcw-fe-api' })
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})