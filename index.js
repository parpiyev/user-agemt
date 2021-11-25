const app = require('express')();
const iplocate = require('node-iplocate');

app.get('/', async (req, res) => {


    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const data = await iplocate(ip, { api_key: 'abb0cae033b33812aa6153dedabb57017e1ee677ff23aa30f48e74a5' });
    return res.json({ data })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});