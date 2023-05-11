class ProductManager {
    #id = 0;
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title,description,price,thumbnail,code,stock = 0){
        let filtro = this.products.filter((product) => product.title === title);
        if (filtro.length > 0) {
            console.log('El producto ya existe');
            return;
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        product.id = this.#getID();
        this.products.push(product);
    }

    #getID(){
        const oldID = this.#id
        this.#id++;
        return oldID;
    }

    getProductByID(idProduct){
        const productIndex = this.products.findIndex((product)  => product.id === idProduct)
        if(productIndex === -1) {
            console.log('No existe el producto')
            return;
        }
        const product = this.products[productIndex];
        return product;
    }

    updateProduct(idProduct, newPrice, newSotck){
        const productIndex = this.products.findIndex(
            (product)  => product.id === idProduct
        );
        if(productIndex === -1) {
            console.log('No existe el producto')
            return;
        }
        
        const product = this.products[productIndex];

        this.products[productIndex] = {
                ...product,
                price: newPrice,
                stock: newSotck,
        }
    }

    deleteProduct(idProduct){
        const productIndex = this.products.findIndex(
            (product)  => product.id === idProduct
        );
        if(productIndex === -1) {
            console.log('No existe el producto')
            return;
        }
        
        const deleteProduct = this.products[productIndex];
        const newArray = this.products.filter((product) => product !== deleteProduct);
        return newArray;
    }
}

const pm = new ProductManager;
// CORRO PRIMERA INSTANCIA
console.log('=====================')
console.log(pm.getProducts());

pm.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
pm.addProduct('producto prueba 2', 'este es un producto prueba 2', 300, 'sin imagen', 'abc123', 35);

// CORRO SEGUNDA INSTANCIA
console.log('=====================')
console.log(pm.getProducts());

// CORRO TERCER INSTANCIA
console.log('=====================')
console.log(pm.getProductByID(1));

pm.updateProduct(0, 220, 40);

// CORRO CUARTA INSTANCIA
console.log('=====================')
console.log(pm.getProducts());

// CORRO QUINTA INSTANCIA
console.log('=====================')
console.log(pm.deleteProduct(0));