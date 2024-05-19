import express from "express";
const router = express.Router();
import pool from '../database2.js';
import {promisify} from 'util';

/* const query = promisify(pool.query).bind(pool); */
const consulta = `CREATE TABLE usuarios (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL
);`

const consulta2 = `SHOW TABLES;`

router.get('/', (req, res)=>{
    pool.query(consulta2, (error, result) =>{
        if (error) {
            console.log('Error al consultar tablas');
            return;
        }
        console.log(result[0]);

        if (result[0] === undefined) {
            pool.query(consulta, (error, result) =>{
                if (error) {
                    console.log('Error al crear tabla');
                    return;
                }
                console.log(result[0]);
                console.log('Creacion de Tablas exitosa');
            })
        } else {
            console.log('Las tablas de la bd ya estan creadas');
        }
        res.render('index.hbs');
    }) 
});


router.get('/signin', (req, res)=>{
    res.render('auth/signin.hbs')
});

/* router.post('/signin', async (req, res)=>{
    
}); */


router.get('/present', (req, res)=>{
    pool.query('SELECT * FROM usuarios', (error, result)=>{
        if (error) {
            console.log('Error al consultar Tabla usuarios');
            return
        }
        console.log(result[0]);
        res.render('present/present.hbs');
    });
    
});


export default router;