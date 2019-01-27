const path = require('path');
const express = require('express');
const app = express();


app.use(express.static('../halanx-home/'));
// app.use(require('prerender-node').set('prerenderToken', 'O9YdAjlHKczN5lx3fKpD'));
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000').set('protocol', 'http'));

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../halanx-home/index.html'));
});

app.set('port', 4000);
app.listen(app.get('port'), () => {
    console.log('Server started at ' + app.get('port'));
});