import fs from "fs";
import qs from "qs";
import productService from "../service/productService.js";
import url from "url";
class ProductController {
ShowAll(req,res){
        let data = ''
        req.on('data', (dataRaw) => {
            data += dataRaw;
        })
        req.on('end', () => {
            if (req.method === 'GET') {
               showList(req, res)
            } else {
                data = qs.parse(data)
                productService.save(data)
                showList(req, res)
            }
        })

}
    ShowDelete(req, res) {
        const urlObj = url.parse(req.url, true);
        const idToDelete = urlObj.query.idDelete;
        if (idToDelete) {
            productService.delete(idToDelete);
        }
        fs.readFile('views/product/listProduct.html', 'utf-8', (err, data) => {
            showList(req, res);
        });
    }

ShowAdd(req,res){
    fs.readFile('views/product/addProduct.html',"utf-8",(err, data) => {
        res.write(data);
        res.end()
    })}

    ShowEdit(req,res){
        fs.readFile('views/product/edit.html',"utf-8",(err, data) => {
            let urlObj = url.parse(req.url,true)
            let proEdit = productService.findById(urlObj.query.idEdit)
            data = data.replace('{id}',proEdit.id);
            data = data.replace('{name}',proEdit.name);
            data = data.replace('{price}',proEdit.price);
            res.write(data);
            res.end()
        })}
}

function showList(req, res) {
    fs.readFile('views/product/listProduct.html', 'utf-8', (err, data) => {
        let listProduct = productService.findAll();
        let str = '';
        for (const item of listProduct) {
            str += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
        <td><a class="btn btn-danger" href="/add-product">Add</a></td>
        <td><a class="btn btn-danger" href="/delete-product?idDelete=${item.id}"> Delete</a></td>
        <td><a class="btn btn-primary" href="/edit-product?idEdit=${item.id}">Update</a></td>
            </tr>
            `
        }
        data = data.replace('{list}', str)
        res.write(data);
        res.end();
    })
}
export default new ProductController()