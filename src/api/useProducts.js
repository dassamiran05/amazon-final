import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);


    useEffect(() => {

        async function handleproduct(){
            const productsapi = await axios.get("https://fakestoreapi.com/products");
            const finalproducts = productsapi.data.map(pro => ({ ...pro, qty: 0 }));
            setProducts(finalproducts);
        }
        handleproduct();
    }, []);

    return [products];
}


export default useProducts;