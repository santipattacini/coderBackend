class productManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    #id = 0;

    #getID() {
        this.#id++;
        return this.#id;
    }

    addProducto(title, description, price, thumbnail, code, stock) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };


        // agrego ID al evento
        product.id = this.#getID();
        // agrego el evento a la lista
        this.products.push(product);
    }

    getProductByID(idProduct){
        const productIndex = this.products.findIndex((product) => product.id === idProduct)
        if (eventoIndex === -1){
            console.log('No existe el producto');
            return
        } else {
            return productIndex;
        }
    }
}

productManager.getProducts()
productManager.addproduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
productManager.getProducts()
productManager.addproduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
productManager.getProductByID(1)
