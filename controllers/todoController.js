var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


var mongoose = require('mongoose');
//連接 mongoDB 線上服務
mongoose.connect('mongodb://todoAccount:todoPassword@ds133360.mlab.com:33360/todo')

var todoSchema = new mongoose.Schema({
    item: String
});


//model 對應到資料庫的表
//操作 model = 操作資料庫的表
var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'get milk'}, {item: 'sleeping'}, {item: 'work hard'}];
// var itemOne = Todo({item: 'eatting'}).save(function(err) {
//     if(err) throw err;
//     console.log('item saved');
// });

module.exports = function(app) {

    app.get('/', function(req, res){
        res.send('Root');
    });

    app.get('/todo', function(req, res){
        //第一個參數的{}代表全部資料
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', { todos: data });
        })
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        // data.push(req.body);
        // res.json(data);
        var itemOne = Todo(req.body).save(function(err, data) {
            if(err) throw err;
            // res.json(data);
            res.json({test: 'test'});
        });
    });

    app.delete('/todo/:item', function(req, res){
        Todo.find({item: req.params.item.replace(/-/g, " ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        })
    });
}


