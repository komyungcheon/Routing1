import http from 'http'
import fs from 'fs';
import qs from 'qs';
import router from "./router/router.js";
import * as url from "url";

const server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url,true)
let handle = router[urlObj.pathname];
if(handle === undefined){
    handle = router['/err']
}
handle(req,res)
})
server.listen(7000,"localhost",function (err) {
    console.log("server dang chay")
})