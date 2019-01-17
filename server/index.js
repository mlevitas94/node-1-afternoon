const express = require('express');   //importing express
const bodyParser = require('body-parser'); //importing body parser so body from response is readable
const mc = require('./controllers/messages_controller');

const app = express(); //executes express object labeling it to app

app.use( bodyParser.json() ); //make json responses readable
app.use( express.static( __dirname + '/../public/build' ) );


const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );

const port = 3001; //labeling port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`); //opens server and listens for requests
});