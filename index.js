/*
    Sets up node and express to serve the contents of /frontend, as well as two API calls
    The API logic for the two calls is separated into the ohp class - this is primarily for code readability/cleanliness
    AUTHOR: Michael McDermott, 03/23/2022
*/
const express = require('express')
const app = express();
const ohpcls = require('./libraries/ohp')

const ohp = new ohpcls()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/generate',  (_req, res) => {
    res.send(ohp.doGenerateMBI())   
})

app.post('/verify',  (req, res) => {
    res.send(ohp.doVerifyMBI(req.body.input_mbi))   
})

app.use(express.static('frontend/dist'))

app.listen(80, () => {
  console.log(`Started OHP Test Project`)
})