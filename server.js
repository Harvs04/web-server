import express from 'express';

// instantiation of server
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server is listening at port " + port);
});

app.get('/groceries', (req, res) => {
    res.send([
        {
            name: "Pancit Canton",
            flavor: "Extra Spicy",
            quantity: 2,
            price: 84
        },
        {
            name: "Egg",
            quantity: 12,
            price: 112
        },
        {
            name: "Chicken",
            quantity: 1,
            price: 270
        }
    ]);
})

app.get('/about', (req, res) => {
    res.send("Welcome to our about page.");
})

app.get('/', (req, res) => {
    res.send(
        `<h1>Enter your age: </h1>
        <form action="/result" method="POST">
            <input type="number">
            <button>Submit</button>
        </form>
        `
    );
})

app.post('/result', (req, res) => {
    res.send("Thank you for answering the form");
})

// app.post('/submit-data', (req, res) => {
//     res.send("POSTED!");
// })

