import React from 'react';
// import { Link } from 'react-router-dom';
// import StarIcon from '@mui/icons-material/Star';
// import ApiIcon from '@mui/icons-material/Api';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import './products.css'
import Product from './Product';

const Products = ({ handleAddtoCart, handleDelete, products, category }) => {

    const categoryProducts = products.filter(x => x.category === category.toLowerCase());

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
                category !== 'All'
                    ?
                    categoryProducts.map(item => <Product key={item.id} item={item} handleAddtoCart={handleAddtoCart}></Product>)
                    :
                    products.map(item => <Product key={item.id} item={item} handleAddtoCart={handleAddtoCart}></Product>)
            }
        </div>
    );
};

export default Products;