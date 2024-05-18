import { PORT } from "./config2.js";
import app from './app.js';
import pool from './database2.js';
import {promisify} from 'util';


app.listen(PORT);

console.log('Server on port: ', PORT);