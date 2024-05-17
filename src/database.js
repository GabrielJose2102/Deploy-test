import mysql from 'mysql';
import { database } from './config.js';


const pool = mysql.createPool(database);

console.log(pool);

try {
    pool.getConnection((err, Connection) =>{
        if (err) {
            if (err.code === 'PROTOCOLO_CONNECTION_LOST') {
                console.log('DATABASE CONNECTION WAS CLOSED')
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                console.log('DATABASE HAS TO MANY CONNECTIONS')
            }
            if (err.code === 'ECONNREFUSED') {
                console.log('DATABASE CONNECTION WAS REFUSED')
            }
        }

        if (Connection) {
            Connection.release();
            console.log('DB is Connected');
            return;
        }
    });
} catch (e) {
    console.log(e);
}

export default pool;


