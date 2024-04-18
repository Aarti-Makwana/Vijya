import express from 'express';
import {productController} from '../controller/productController.js';
let productRouter = express.Router();
productRouter.get('/',productController);
export default productRouter;