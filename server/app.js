import express from 'express';
import productRouter from './router/productRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 
const port = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'images')));

app.use('/',productRouter);

app.listen(port,()=>{
    console.log(`Server started at localhost:${port}`);
});