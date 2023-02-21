import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);


    useEffect(() => {

        async function handleproduct(){
            const productsapi = await axios.get("https://fakestoreapi.com/products");
            const finalproducts = productsapi.data.map(pro => ({ ...pro, stock: 10 }));
            const secondProduct = {...finalproducts[1],stock:0};
            finalproducts[1] = secondProduct;
            setProducts(finalproducts);
        }
        handleproduct();
    }, []);

    return [products];
}


export default useProducts;