const express = require('express')
const app = express()
// Changes made to the output
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello to you ** Cash ** and to the rest of the world out there!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})

// This is a change to branch feat1 to demonstrate release functionaility using GitHub
// We will need to add some notes to our PR in order to demo the automated notes function as well.