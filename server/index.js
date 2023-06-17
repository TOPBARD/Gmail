import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json({ extended: true}));
app.use('/', routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));