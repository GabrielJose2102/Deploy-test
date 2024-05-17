import { PORT } from "./config.js";
import app from './app.js';
import pool from './database.js';
import {promisify} from 'util';


app.listen(PORT);

console.log('Server on port: ', PORT);