import express from 'express';
import { port } from './config';
import serverRender from './serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const initialContent = serverRender();
    res.render('index', { initialContent });
});

app.listen(port, function listeHandler() {
    console.info(`Running on ${ port }`);
});