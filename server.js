const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/wtfsic'));

app.get('/api', (req, res) => {
    res.json({
        id: process.env.EDAMAME_ID,
        key: process.env.EDAMAME_KEY
    })
});

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/wtfsic/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);