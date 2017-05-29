htt.createServer(function(request, response){

        response.writeHead(200,{'Content-Type': 'text/html'});
        
        response.write('Hello World, my name is Austin Greer');

                 
    response.end('End'\n);             
}).listen(8001);

console.log('Server running at http://127.0.0.1:8001/');