const express = require('express');
const http = require('http');

var url = require('url');
const app = express();
const path = require('path');
const router = express.Router();
var fs = require('fs');
var file = __dirname + '/graph.json';

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.set('view engine', 'jade');
app.use(express.static('public'))
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'), file);
  //__dirname : It will resolve to your project folder.

});

 // get json data from api
app.post('/device/:id', (req, res, next) => {
	   console.log('device: ' + req.params.id + ' Request received');
	   let parsedContent = JSON.parse(req.query);
	   let payload = req.body.payload; // your json data
	   //res.status(201).send('success');
	});

//app.set('view engine', 'pug');
router.get('/portfolio',function(req,res){
  
  res.sendFile(path.join(__dirname+'/portfolio.html'));
});

router.get('/apphealth',function(req,res){
	/*var url = 'http://graph.facebook.com/517267866/?fields=picture';
	
	http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse.picture);
        
    });
    }).on('error', function(e){
      console.log("Got an error: ", e);
   });*/
	
	res.sendFile(path.join(__dirname+'/apphealth.html'));
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3030);

console.log('Running at Port 3030');
