import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import pokedexRoutes from '../routes/routes';

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../resources/views'));

app.use('/', pokedexRoutes);

export default app;
