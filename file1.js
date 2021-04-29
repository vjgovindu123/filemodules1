var http=require("http")
//var fs=require("fs")
var server=http.createServer(function(req,res){
   // fs.readFile("Test1.txt",function(err,data){
        res.write("Hello World")
        res.end()
    })

server.listen(1000)
console.log("server started...")