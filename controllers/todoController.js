var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


var mongoose = require('mongoose');
//連接 mongoDB 線上服務
mongoose.connect('mongodb://todoAccount:todoPassword@ds133360.mlab.com:33360/todo')

var todoSchema = new mongoose.Schema({
    item: String
});
var data = [{item: 'get milk'}, {item: 'sleeping'}, {item: 'work hard'}];

//model 對應到資料庫的表
//操作 model = 操作資料庫的表
var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'eatting'}).save(function(err) {
    if(err) throw err;
    console.log('item saved');
});

module.exports = function(app) {

    app.get('/', function(req, res){
        res.send('Root');
    });

    app.get('/todo', function(req, res){
        res.render('todo', {todos : data});
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', function(req, res){

    });
}


