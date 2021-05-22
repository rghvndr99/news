const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
const port = process.env.port || 9000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/news', async (req, res) => {
	const { APP_BASE_URL, APP_TOKEN } = process.env;
	let feed = await fetch(APP_BASE_URL + '?' + req.body.queryString + '&apiKey=' + APP_TOKEN, {
		method: 'get',
		headers: { 'Content-Type': 'application/json' }
	});

	let formatteddata = await feed.text();
	res.send(formatteddata);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})