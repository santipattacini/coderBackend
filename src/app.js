import express from 'express';
import send from 'send';

const app = express();
app.use(express.urlencoded({extended:true}))

const products = [
    {
        id: '1',
        title: 'Vaper 1',
        marca: 'Vaporesso',
        precio: 24000,
        stock: 10
    },
    {
        id: '2',
        title: 'Vaper 2',
        marca: 'Geek Vape',
        precio: 15000,
        stock: 2
    },
    {
        id: '2',
        title: 'Vaper 3',
        marca: 'Argus',
        precio: 12000,
        stock: 7
    },
    {
        id: '4',
        title: 'Vaper 4',
        marca: 'Vaporesso',
        precio: 28000,
        stock: 0
    },
    {
        id: '5',
        title: 'Vaper 5',
        marca: 'Argus',
        precio: 22000,
        stock: 9
    },
    {
        id: '6',
        title: 'Vaper 6',
        marca: 'Argus',
        precio: 32000,
        stock: 5
    },
    {
        id: '7',
        title: 'Vaper 7',
        marca: 'Geek Vape',
        precio: 22000,
        stock: 2
    },
    {
        id: '8',
        title: 'Vaper 8',
        marca: 'Vaporesso',
        precio: 38000,
        stock: 8
    },
    {
        id: '9',
        title: 'Vaper 9',
        marca: 'Vaporesso',
        precio: 35000,
        stock: 5
    },
    {
        id: '10',
        title: 'Vaper 10',
        marca: 'Geek Vape',
        precio: 21000,
        stock: 0
    },

]

app.get('/products', (req, res) => {
    let limit = req.query.limit
    console.log(limit)
    if(isNaN(limit)){
        res.send(products)
    } else {
        res.send(products.filter((product) => parseInt(product.id) <= limit))
    }
})

app.get('/products/:id', (req, res) => {
        let product = products.filter((product) => {
            return product.id === req.params.id
        })
        if(req.params.id > 10){
            res.send('El producto no existe')
        } else {
            res.send(product)
        }
})

app.listen(8080, ()=> {
    console.log('Estoy escuchando el 8080!')
});