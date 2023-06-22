import fs from 'fs'
import productRouter from "./productRouter.js";
import Homecontroller from "../controller/homecontroller.js";
let router = {
    '/' : Homecontroller.showHome,
    '/err' : Homecontroller.showErr
    }

router = {...router,...productRouter}
export default router;