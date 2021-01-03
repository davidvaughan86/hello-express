const http = require(`http`)
const express = require(`express`)

const app = express(); // makes a new app. 
const server = http.createServer(app);

// app please listen for requests
// `/` means they are asking for the home page
// the anonymous function will handle the HTTP request
// and send back the  HTTP response
app.get(`/`, (req, res) => {
/* req and res are passed to my anonymous function
    i need to make room for them with placeholders */
    res.send(`what juicy say? stfuuuuu`)

})

// turn on the server
// what port do i listen on
// what is my IP addy
server.listen(3000, `localhost`, () => {
console.log(`running on port 3000`)

});
