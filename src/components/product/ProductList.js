import ProductItem from "./ProductItem";
import {useState, useEffect} from "react";



const ProductList = () => {
    const [products, setProducts] = useState([])


    // function getData() {
    //     let products = []
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data=> {
    //             setProducts(data)
    //             const date = new Date()
    //             console.log(date)
    //         })
    // }

    const getData = () => {
        let products = []
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((er) => console.log(er));

    }




    useEffect(getData, [])

    return (
        <div>
            <h1>Список товаров</h1>
            {products.map(
                product => <ProductItem
                    item={product}
                    key={product.id}
                />
            )}
        </div>
    )
}

export default ProductList;