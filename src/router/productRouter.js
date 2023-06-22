import fs from 'fs'
import router from "./router.js";
import {Product} from "../model/product.js";
import {ProductService} from "../service/productService.js";
import qs from "qs";
import Productcontroller from "../controller/productcontroller.js";
let productService =new ProductService();
let productRouter = {
    '/list-product' : Productcontroller.ShowAll,
    '/add-product' : Productcontroller.ShowAdd,
    '/edit-product' : Productcontroller.ShowEdit,
    '/delete-product' : Productcontroller.ShowDelete,
}

export default productRouter;