import path from "path";
import {fileURLToPath } from 'url';
import express from "express";
import exphbs from 'express-handlebars';
import morgan from 'morgan';


import indexRoutes from './routes/index.routes.js';
import { ppid } from "process";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//setting
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: "",
    extname: ".hbs"
}));
app.set("views engine", ".hbs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(indexRoutes);


//public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src/public/css', (req, res, next) => {
    res.setHeader('Content-Type', 'text/css');
    next();
  }, express.static(__dirname + '/public/css'));



export default app;