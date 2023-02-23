import React from 'react';
import Banner from '../components/Home/Banner';
import ElectronicProducts from '../components/Home/ElectronicProducts';
import Products from '../components/Home/Products';
import WomanCloth from '../components/Home/WomanCloth';

const Home = ({handleAddtoCart, handleDelete, products, category, searchQuery}) => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-full -mt-14 xl:-mt-36 py-10'>
                <Products handleAddtoCart={handleAddtoCart} handleDelete={handleDelete} products={products} category={category} searchQuery={searchQuery}></Products>
            </div>
            <div className='w-full mt-0 mb-4 px-4'>
                <ElectronicProducts products={products}></ElectronicProducts>
            </div>
            <div className='w-full mt-0 mb-4 px-4'>
                <WomanCloth products={products}></WomanCloth>
            </div>
            
        </div>
    );
};

export default Home;