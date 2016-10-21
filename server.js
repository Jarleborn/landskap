


var express = require('express');
var app = express();
var http = require('http').Server(app);
http.listen(8000);

app.use(express.static(__dirname + '/public'));
app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

 app.get('/', function (req, res) {
   res.sendfile(__dirname + '/public/index.html');
 });

app.get('/lsakp', function (req, res) {
  var lskap = ["Blekinge" ,
   "Bohuslän" ,
   "Dalarna" ,
   "Dalsland" ,
   "Gotland" ,
   "Gästrikland" ,
   "Halland" ,
   "Hälsingland" ,
   "Härjedalen",
   "Jämtland" ,
   "Lappland" ,
   "Medelpad" ,
   "Norrbotten" ,
   "Närke" ,
   "Skåne" ,
   "Småland" ,
   "Södermanland" ,
   "Uppland" ,
   "Värmland" ,
   "Västerbotten",
   "Västergötland" ,
   "Västmanland" ,
   "Ångermanland" ,
   "Öland" ,
   "Östergötland"] ;

  res.send(lskap)

})
