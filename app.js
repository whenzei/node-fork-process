const app = require('express')();
const {fork} = require('child_process');
const port = 8081;

app.get("/isprime", (req, res ) => {
    const childProcess = fork(__dirname + '/findPrime.js');

    childProcess.send({"number": parseInt(req.query.number)});
    childProcess.on("message", message => res.send(message))
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})