var express = require('express');

var app = express();
    
var todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(5000);

console.log('Node server is running on port 5000');

//1.點擊 Add Item 的時候，它會發送一個請求到伺服器
//2.把數據傳到伺服器
//3.伺服器得到數據之後進行處理
//4.處理後 rosponse 給瀏覽器
//5.下面的列表多加一行(瀏覽器處理)