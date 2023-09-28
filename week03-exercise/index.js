var http = require("http");
var empdb = require("./Employee");
console.log("Lab 03 -  NodeJs");


//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    } else {
        if (req.url === '/') {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return;
        }

        if (req.url === '/employee') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(empdb.employeesDB));
            return;
        }

        if (req.url === '/employee/names') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(empdb.employeesDB.map(x => `${x.firstName} ${x.lastName}`).sort()));
            return;
        }

        if (req.url === '/employee/totalsalary') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ total_salary: empdb.employeesDB.reduce((acc, cur) => acc += cur.Salary, 0) }));
            return;
        }

        res.end(JSON.stringify({ error: http.STATUS_CODES[404] }))
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})