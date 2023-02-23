import React from 'react';
import './products.css'
import Product from './Product';

const Products = ({ handleAddtoCart, products, category, searchQuery }) => {

    // const categoryProducts = products.filter(x => x.category === searchQuery.category?.toLowerCase());

    // const keySearchProducts = products.filter(x => {
    //     if (searchQuery.keyword === "") {
    //         return x;
    //     }
    //     else if(x.title?.toLowerCase().includes(searchQuery.keyword?.toLowerCase())) {
    //         return x;
    //     }
    // });


    const searchProducts = products.filter(x => {
        if(x.category?.toLowerCase() === searchQuery.category?.toLowerCase() && x.title?.toLowerCase().includes(searchQuery.keyword?.toLowerCase())){
            return x;
        }else if(x.category?.toLowerCase() === searchQuery.category?.toLowerCase() && searchQuery.keyword === ''){
            return x;
        }else if(x.title?.toLowerCase().includes(searchQuery.keyword?.toLowerCase()) && searchQuery.category === ''){
            return x;
        }
        else {
            return null;
        }
    })
   

    // const data = useLoaderData();
    // const productsData = data.data.products;
    // console.log(data);
    // const productsData = data;
    // console.log(productsData.map(pro => ({...pro, qty: 0}));
    // const products = productsData.map(obj => ({ ...obj, qty: 0 }));
    // console.log(products);



    return (
        <div className='max-w-screen-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4'>
            {
                searchQuery?.keyword || searchQuery?.category
                    ?
                    searchProducts.map(item => <Product key={item.id} item={item} handleAddtoCart={handleAddtoCart}></Product>)
                    :
                    products.map(item => <Product key={item.id} item={item} handleAddtoCart={handleAddtoCart}></Product>)
            }
        </div>
    );
};

export default Products;