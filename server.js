import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config({path:'./.env',quiet:true});
const port=process.env.PORT || 3000;
const app=express();
app.use(cors( {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            text: 'What do you call a fish with no eyes? Fshh'
        },
        {
            id: 2,
            text: 'What do you call a fish with no eyes? Fshh'
        },
        {
            id: 3,
            text: 'What do you call a fish with no eyes? Fshh'
        },
        {
            id: 4,
            text: 'What do you call a fish with no eyes? Fshh'
        },
        {
            id: 5,
            text: 'What do you call a fish with no eyes? Fshh'
        }
    ]
    res.json(jokes.slice(0,5));
});


app.all('/test', (req, res) => {
    res.send('Hello  Test!');
}) 
 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});