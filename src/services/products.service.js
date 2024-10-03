import axios from "axios";

export async function getAllProducts() {
    return await axios.get('https://dummyjson.com/products');
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/product/${id}`);
}

export async function getProductByCategory(id) {
    return await axios.get(`https://dummyjson.com/products/category/${id}`);
}





/* export async function getAllProducts() {
    return await axios.get('https://rickandmortyapi.com/api/character');
} */