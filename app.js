var socketio=require('socket.io');
var http=require('http');
var express=require('express');
var app=express();
var httpServer=http.createServer(app);
var io=socketio.listen(httpServer);

app.use(express.static('www'));
httpServer.listen(8088,function(){
    console.log('服务器运行在8088端口...')
})

io.on('connection',function(socket){
    console.log('有用户链接：'+socket.id);
    // socket.emit('welcome',{message:'欢迎你！'})
    socket.on("drawInfo", function(obj) {
        io.emit("drawInfo", obj);
    });

})
