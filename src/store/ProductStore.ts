import { Product } from "../model/Product";


const products = [{ "name": "Apple", "rating": 2, "description": "Hello", "id": "a" },
{ "name": "Orange", "rating": 2, "description": "Hello", "id": "b" }]


export const getProducts = (searchText: string = ''): Product[] => {
    if (searchText === '') {
        return products
    }
    return products.filter((product) => {
        return product.name.toLowerCase().startsWith(searchText.toLowerCase());
    });
}

export const getProductById = (id: string): Product => {
    return products.filter(p => p.id === id)[0]
} 