const express = require('express');
const Request = require('request');
const querystring = require('querystring');
const app = express();


const PORT = 5000;

const CLIENT_SECRET = '49e8fe5f7525bb3add06b72a2f50e56e2d10dd76';

app.use(express.json());

app.post('/api/oauth', (request, response) => {
  console.log('/api/oauth');

  const data = {...request.body, client_secret: CLIENT_SECRET}

  const options = {
    method: 'POST',
    uri: `https://github.com/login/oauth/access_token?${querystring.stringify(data)}`,
  };

  Request(options, function(error, githubResponse, body){
    response.status(githubResponse.statusCode).send(body);;
    if(error) console.log('Error:', error);
  });
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
