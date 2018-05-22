var data = [{item: 'get milk'}, {item: 'sleeping'}, {item: 'work hard'}];
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

    app.get('/', function(req, res){
        res.send('Todo-list root');
    });

    app.get('/todo', urlencodedParser, function(req, res) {
        
        data.push(req.body);
        res.json(data);
        res.render( 'todo', {todos : data});

    });

    app.post('/todo', function(req, res){
                
        

    });

    app.delete('/todo', function(req, res){

    });
}


