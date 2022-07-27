const http = require('http');



const server = http.createServer((req, res) =>{
    res.write("Welcome to NOD App - New Changes");
    res.end();
})



//server.listen(process.env.PORT);
server.listen(3000);

/*


OS (Linux)
NodeJS (Software / CLI)
Open Port (3000)
index.js
package.js

Command Terminal
-----------------

node index.js
*/