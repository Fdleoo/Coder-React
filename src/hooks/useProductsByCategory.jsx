import React from 'react'
import { getProductByCategory } from '../services/products.service';

export const useProductsByCategory = (id) => {
    const [products, setProducts] = React.useState([])
    React.useEffect(() =>{
        getProductByCategory(id).then((response) =>{
            setProducts(response.data.products)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [id]);
    return {products};
}
