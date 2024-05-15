import express from "express";
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('index.hbs')
});


router.get('/signin', (req, res)=>{
    res.render('auth/signin.hbs')
})


export default router;