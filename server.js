import express from 'express';

// instantiation of server
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server is listening at port " + port);
});

app.get('/', (req, res) => {
    res.send("Si idol pala to eh")
})

app.post('/submit-data', (req, res) => {
    res.send("POSTED!");
})

