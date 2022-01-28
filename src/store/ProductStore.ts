import { ProductList } from "../components/ProductList";
import { EdamanObject } from "../model/FoodAPI";
import { Product } from "../model/Product";




const products: Product[] = [{ "name": "Apple", "rating": 2, "description": "Hello", "id": "food_a1gb9ubb72c7snbuxr3weagwv0dd", image: "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg" },
{ "name": "Orange", "rating": 2, "description": "Hello", "id": "food_b0bnl8oayiqhs2at63ifxbm6i3o3", image: "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg" }]


export const getProducts = async (searchText: string = ''): Promise<Product[]> => {
    console.log(searchText)
    if (searchText === '') {
        return products
    }

    let pd = await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${searchText}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
            "x-rapidapi-key": "a2cc2bb0cfmsh42d1d949aaba62ep17046ajsn73e1c32e13e1"
        }
    }).then(res => res.json() as Promise<EdamanObject>)
        .then(response => {
            console.log(response);
            // let product: Product = { "name": response.data.parsed, "rating": 2, "description": "Hello", "id": "a" };
            return response.parsed.map((prod => <Product>(
                { "name": prod.food.label, "rating": 2, "description": "test", "id": prod.food.foodId, image: prod.food.image }
            )));
        })
        .catch(err => {
            console.error(err);
            return [{ "name": "Apple", "rating": 2, "description": "Hello", "id": "a", image: "wifi" }];
        })
    // products.concat(pd);
    return pd;
    // return products.filter((product) => {
    //     return product.name.toLowerCase().startsWith(searchText.toLowerCase());
    // });
}

export const getProductById = async (id: string): Promise<Product> => {
    // console.log(products);
    // return products.filter(p => p.id === id)[0]
    return await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
            "x-rapidapi-key": "a2cc2bb0cfmsh42d1d949aaba62ep17046ajsn73e1c32e13e1"
        }
    }).then(res => res.json() as Promise<EdamanObject>)
        .then(response => {
            console.log(response);
            // let product: Product = { "name": response.data.parsed, "rating": 2, "description": "Hello", "id": "a" };
            return response.hints[0].food
        }).then(food => ({ "name": food.label, "rating": 2, "description": "test", "id": food.foodId, image: food.image }));
}

