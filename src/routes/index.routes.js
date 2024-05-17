import express from "express";
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('index.hbs')
});


router.get('/signin', (req, res)=>{
    res.render('auth/signin.hbs')
});

/* router.post('/signin', ); */


router.get('/present', (req, res)=>{
    res.render('present/present.hbs')
});


export default router;