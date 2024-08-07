// importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');


// initializing express
const app = express();
const port = 5000;

// middleware
app.use('/user', UserRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('Response from express')
})

app.get('/add', (req, res) => {
    res.send('Response from add');
})



// getall
app.get('/getall', (req, res) => {
    res.send('Response from getall');
})

//update
app.get('/getall', (req, res) => {
    res.send('Response from update');
})
app.listen(port, () => { console.log('server started') });







