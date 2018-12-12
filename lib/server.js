import express from 'express';
import { port } from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { answer: 25 });
});

app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`);
});
