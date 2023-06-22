import fs from "fs";

class HomeController {
 showErr(req,res){
     fs.readFile('views/user/err.html','utf-8',(err, data) => {
         res.write(data);
         res.end()
     })
 }
 showHome(req,res){
     fs.readFile('views/user/index.html','utf-8',(err, data) => {
         res.write(data);
         res.end()
     })
 }
}
export default new HomeController()