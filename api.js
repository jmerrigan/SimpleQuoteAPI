const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;


app.use(cors())

app.get('/api', (req, res) => {
    const url = 'http://positive-quotes.herokuapp.com/v1/quotes/random';
    axios.get(url)
        .then(apiRes => res.send(apiRes.data))
})

app.listen(port, () => console.log(`listening on ${port}`))