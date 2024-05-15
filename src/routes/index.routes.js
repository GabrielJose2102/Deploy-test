import express from "express";
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('Interface index');
});


router.get('/signin', (req, res)=>{
    res.render('auth/signin.hbs')
})


export default router;