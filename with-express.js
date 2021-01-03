const http = require(`http`)
const express = require(`express`)

const app = express(); // 
const server = http.createServer(app);


app.get(`/`, (req, res) => { // if (req.url == `/`) { this is the vanilla js way

    res.send(`what juicy say? stfuuuuu`) // res.end is used by vanilla js to end. no more write can be performed.

}); 

app.get(`/juicy`, (req, res) => { 
    res.send(`
<ul>
    <li><a href="/juicy/songname">juicy</a></li>
    <li><a href="/juicyjay/artist">artist</a></li>
</ul>
`);
});
app.get(`/juicy/:songname`, (req, res) => {
    const songname = req.params.songname;
    res.send(`this is a song called ${songname}`)
});
app.get(`/juicyjay/:artist`, (req, res) => {
    const artist = req.params.artist;
    res.send(`this is an ${artist}`)
});
// res.setheader(`content-type`, `text/plain`) is not needed with express

server.listen(3001, `localhost`, () => {
console.log(`running on port 3001`)

});
