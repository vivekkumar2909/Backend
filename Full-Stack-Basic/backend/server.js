import  express from "express";

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.get('/api/jokes', (req, res) => {
    const jokes = [
        
            {
                "id": 1,
                "title": "A Joke",
                "joke": "I am a cat"
            },
            {
                "id": 2,
                "title": "A Joke",
                "joke": "I am a dog"
            }
        
    ]

    res.send(jokes);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}!`);
});