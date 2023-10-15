//building simple express server with bun 
import express from 'express';

const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('bun server is running')
})

app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
});