import React from 'react'
import { useParams } from 'react-router'
import { UseProductById } from '../hooks'
import { ItemDetailContainer } from '../components'


export const Item = () => {
    
    const { id } = useParams()

    const { product, loading } = UseProductById(id);
    return <ItemDetailContainer product={product} />
}
