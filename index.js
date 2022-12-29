const express = require('express')
const app = express()
const request = require('request')


const url = new URL('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=?&interval=5min&apikey=636AGY53C52H8XCC');
const search_params = url.searchParams;
search_params.set('symbol','TSLA');

url.search = search_params.toString();
const new_url = url.toString();
console.log(new_url);


request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});



