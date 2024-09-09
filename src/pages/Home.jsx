import React from 'react'
import { ItemListContainer, NavBar } from '../components'
import { useProducts } from '../hooks'


export const Home = () => {
    
    const {products, loading} = useProducts();
    
    return <ItemListContainer productos={products}/>
}
