const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = 1337

app.use(express.static(__dirname + '/public'))
app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next();
});

 app.get('/', function (req, res) {
   res.sendfile(__dirname + '/public/index.html')
 });

app.get('/lsakp', function (req, res) {
  var lskap = ['Blekinge' ,
   'Bohuslän' ,
   'Dalarna' ,
   'Dalsland' ,
   'Gotland' ,
   'Gästrikland' ,
   'Halland' ,
   'Hälsingland' ,
   'Härjedalen',
   'Jämtland' ,
   'Lappland' ,
   'Medelpad' ,
   'Norrbotten' ,
   'Närke' ,
   'Skåne' ,
   'Småland' ,
   'Södermanland' ,
   'Uppland' ,
   'Värmland' ,
   'Västerbotten',
   'Västergötland' ,
   'Västmanland' ,
   'Ångermanland' ,
   'Öland' ,
   'Östergötland'] ;

  res.send(lskap)
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
