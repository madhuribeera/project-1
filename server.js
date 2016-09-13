var express = require('express');
var app = express();

var middleware = {
	requireAuthnetication: function(req, res, next){
		console.log("Login Success!!")
		next()
	}
	}
	/*
	loger : function(req, res, next){
		console.log(req.method);
		next();
	}
}
*/
app.use(middleware.requireAuthnetication)
//app.use(middleware.loger)


app.get('/', function(req, res){
	res.send("Express application.");
})

app.get('/Aboutus', function(req, res){
	res.send("This is about us page.");
})

app.get('/Contactus', function(req, res){
	res.send("This is about us page.");
})
app.get('/help', function(req, res){
	res.send("This is help page to clarify our queries.");
})



app.use(express.static(__dirname + "/process"));

app.listen(8080);