import React from 'react'
import { ItemListContainer, NavBar } from '../components'
import { useItemCollection } from '../hooks'


export const Home = () => {
    
    const {items, loading} = useItemCollection('products');
    
    return <ItemListContainer productos={items}/>
}
