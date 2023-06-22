import {Product} from "../model/product.js";


export class ProductService {
    constructor() {


        this.listProduct = [];
        this.listProduct.push(new Product(1, 'Hoa qua', 10000))
        this.listProduct.push(new Product(2, 'Tao', 50000))
        this.listProduct.push(new Product(3, 'Hong', 20000))
        this.listProduct.push(new Product(4, 'Dao', 15000))
        this.listProduct.push(new Product(5, 'Chuoi', 90000))
    }

    findAll() {
        return this.listProduct;
    }

    add(product) {
        this.listProduct.push(product);

    }

    // update(productEdit){
    //     for (let i = 0; i < this.listProduct.length; i++) {
    //      if(this.listProduct[i].id == productEdit.id){
    //          this.listProduct[i] = productEdit
    //      }
    //     }
    // }
    save(product) {
        let checkExist = false;
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == product.id) {
                this.listProduct[i] = product
                checkExist = true;
            }
        }
        if (!checkExist) {
            this.listProduct.push(product)
        }
    }

    delete(id) {
        const index = this.listProduct.findIndex(product => product.id == id);
        if (index !== -1) {
            this.listProduct.splice(index, 1);
        }
    }


    findById(id) {
        for (const product of this.listProduct) {
            if (product.id == id) {
                return product
            }
        }
    }
}

export default new ProductService();