const app = require('express')();
const axios = require("axios")
const iplocate = require('node-iplocate');

app.get('/', async (req, res) => {


    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const data = await iplocate(ip);
    return res.json({ data })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});