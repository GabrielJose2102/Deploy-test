import mysql from 'mysql2';
import { database } from './config2.js';

const pool = mysql.createConnection(database);

pool.connect((err, Connection)=>{
    if (err) {
        console.error('Error al conectar la base de datos');
        return;
    }
    console.log('Conexion a la base de datos exitosa');
});


export default pool;