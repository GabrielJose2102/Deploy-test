import express from "express";
const router = express.Router();
import pool from '../database.js';
import {promisify} from 'util';

const query = promisify(pool.query).bind(pool);


router.get('/', (req, res)=>{
    res.render('index.hbs')
});


router.get('/signin', (req, res)=>{
    res.render('auth/signin.hbs')
});

/* router.post('/signin', async (req, res)=>{
    
}); */


router.get('/present', async (req, res)=>{
    const usuario = await query('SELECT * FROM usuarios');
    console.log(usuario);
    res.render('present/present.hbs')
});


export default router;