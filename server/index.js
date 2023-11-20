import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from '../server/routes/route.js';

import cors from 'cors';

const app = express();

dotenv.config();

app.use(cors());
app.use('/', Routes);

const PORT =8000;

const username = process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, ()=> console.log(`Server is runinnn successfully on PORT ${PORT}`));