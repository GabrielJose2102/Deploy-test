import express from "express";
const router = express.Router();
import pool from '../database2.js';
import {promisify} from 'util';

/* const query = promisify(pool.query).bind(pool); */


router.get('/', (req, res)=>{
    res.render('index.hbs')
});


router.get('/signin', (req, res)=>{
    res.render('auth/signin.hbs')
});

/* router.post('/signin', async (req, res)=>{
    
}); */


router.get('/present', (req, res)=>{
    pool.query('SELECT * FROM usuarios', (error, result, fields)=>{
        if (error) {
            console.log('Error al consultar Tabla usuarios');
            return
        }
        console.log(result[0]);
        res.render('present/present.hbs');
    });
    
});


export default router;