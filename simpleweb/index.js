const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server', // Comes from docker-compose file. Name of redis container
    port: 6379 // Redis default port number
});

client.set('visits', 0);

app.get('/', (req,res) => {
    // res.send('Hi there')
    client.get('visits', (err, visits) => {
        res.send('Number of visits: '+ visits);
        client.set('visits', parseInt(visits)+1);
    })
});

app.listen(8080,  () => {
    console.log('Listening on port 8080');
})