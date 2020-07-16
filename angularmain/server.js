const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware');

const bodyparser = require('body-parser');

const api = require('./server/routes/api');

const path = require('path');

const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

//app.use(express.static(path.join(__dirname, ‘dist/ngapp’));

app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());

const options = {
  target: 'http://localhost:8000/api/', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api/old-path': '/api/new-path', // rewrite path
    '^/api/remove/path': '/path', // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    'dev.localhost:3000': 'http://localhost:8000',
  },
};

const apiProxy = createProxyMiddleware(options);

app.use('/api', apiProxy);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, function(){
	console.log("Server running on localhost:" + port);
});
