const http =require("http");

const PORT = 8000;
const HOST = "0.0.0.0";
// const req = http.request({
//        host: '127.0.0.1',
//        port: 8080,
//        method: 'POST',
//      }, (res) => {
//        res.resume();
//        res.on('end', () => {
//          if (!res.complete)
//            console.error(
//             'The connection was terminated while the message was still being sent');
//        });
//      });

const html = require("fs").readFileSync("./server_test.html");
//webサーバー作成
const server = http.createServer((req,res) => {
 //アクセス成功した際の処理

 req = http.request({host:HOST, port:PORT});
 res.writeHead(200, {"condent-type":"text/html"});
 res.write(html)
 res.end();

});
server.listen(PORT, ()=> {
    console.log("server running")
});
