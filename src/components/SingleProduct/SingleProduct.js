import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {check, delivered, returns, shipping} from '../../assets/index';

const SingleProduct = ({handleAddtoCart, handleDelete, products}) => {

    // const data = useLoaderData();
    // const productsData = data;
    const {id} = useParams();

    const product = products.find((x) => x.id === parseInt(id));
    const [quantity, setQuantity] = useState(0);
    console.log(quantity);


    return (
        <div className="flex justify-center px-4 py-10">
            <div className="w-[35%] h-screen flex items-start justify-center">
                <img className= "w-full h-auto object-contain" src={product.image} alt={product.title} />
            </div>
            <div className="w-[45%] h-auto px-[50px]">
                <h1 className='text-3xl font-titleFont text-black-400 flex-wrap text-medium'>{product.title}</h1>
                <div className='text-yellow-500 border-b-[1px] border-gray-300'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div className="my-3">
                    <span className="text-3xl text-black-500 font-titleFont">${product.price}</span>
                </div>
                <div className='flex flex-col gap-1 mb-3'>
                    <span className='text-sm text-black-300 font-titleFont'>Inclusive of all taxes</span>
                    <span className='text-2sm text-black-100 font-titleFont'><span className='font-bold'>EMI</span> starts at ₹400. No Cost <span className='font-bold'>EMI</span> available</span>
                    <div className='border-b-[1px] border-gray-300 mt-2'></div>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-xl text-black-400 font-titleFont'>Offers</span>
                    <div className="flex gap-1">
                        <div className="flex flex-col gap-2 border-[1px] border-gray-300 p-2 rounded-md shadow">
                            <span className='text-sm font-bold font-titleFont'>No Cost EMI</span>
                            <p className='text-sm font-titleFont text-black-500'>Upto ₹354.06 EMI interest savings on Amazon Pay ICICI</p>
                            <div className="flex gap-1 items-center cursor-pointer group duration-200">
                                <span className="text-[#007185] group-hover:text-[#C7511F] hover:underline">1 offer </span>
                                <ChevronRightIcon className="text-[#007185] group-hover:text-[#C7511F]"/>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-2 border-[1px] border-gray-300 p-2 rounded-md shadow">
                            <span className='text-sm font-bold font-titleFont'>Bank Offers</span>
                            <p className='text-sm font-titleFont'>Upto ₹627.67 discount on select Credit Cards</p>
                            <div className="flex gap-1 items-center cursor-pointer group duration-200">
                                <span className="text-[#007185] group-hover:text-[#C7511F] hover:underline">4 offers </span>
                                <ChevronRightIcon className="text-[#007185] group-hover:text-[#C7511F]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 border-[1px] border-gray-300 p-2 rounded-md shadow">
                            <span className='text-sm font-bold font-titleFont'>Partners Offers</span>
                            <p className='text-sm font-titleFont'>Get GST invoice and save up to 28% on business purchases.</p>
                            <div className="flex gap-1 items-center cursor-pointer group duration-200">
                                <span className="text-[#007185] group-hover:text-[#C7511F] hover:underline">1 offer </span>
                                <ChevronRightIcon className="text-[#007185] group-hover:text-[#C7511F]"/>
                            </div>
                        </div> 
                    </div>
                    <div className="border-b-[1px] border-gray-300 mt-3"></div>
                </div>
                <div className="flex items-center gap-4 mt-2 border-b-[1px] border-gray-300">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={delivered} alt="" className="w-[45%] h-auto object-contain"/>
                        <p className='text-sm font-titleFont text-[#007185] hover:text-[#C7511F] cursor-pointer'>Free Delivery</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={returns} alt="" className="w-[45%] h-auto object-contain"/>
                        <p className='text-sm font-titleFont text-[#007185] hover:text-[#C7511F] cursor-pointer text-center'>10 days<br/> Returnable</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={shipping} alt="" className="w-[45%] h-auto object-contain"/>
                        <p className='text-sm font-titleFont text-[#007185] hover:text-[#C7511F] cursor-pointer text-center'>Amazon<br/> Delivered</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={check} alt="" className="w-[45%] h-auto object-contain"/>
                        <p className='text-sm font-titleFont text-[#007185] hover:text-[#C7511F] cursor-pointer text-center'>6 Month<br/> Warranty</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-3">
                    <h2 className='font-bodyFont font-bold text-xl'>About this item</h2>
                    <div className='text-sm font-titleFont'>
                        {
                            product.description
                        }
                    </div>
                </div>
                
            </div>
            <div className="w-[20%] h-[480px] flex flex-col p-3 border-[1px] border-gray-300 rounded-md shadow gap-3">
                <span className='text-2xl font-titleFont font-bold'>${product.price.toFixed(2)}</span>
                <span className='text-sm font-bodyFont'><span className='text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer'>FREE delivery</span> <span className="font-bold text-sm font-bodyFont">Friday, 24<br /> February.</span> <span className='text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer'>Details</span></span>
                <span className='text-xl text-[#007600] font-bodyFont'>In stock</span>
                <span className='text-sm font-bodyFont text-black-500 '>Sold by <span className='text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer'>KapoorEIlluminations</span> and Delivered by Amazon.</span>

                <div className='bg-[#F0F2F2] flex gap-3 mt-2 drop-shadow-lg w-40 py-1.5 px-1'>
                    <p className='flex items-center justify-center'>Qty:</p>
                    <p className='flex items-center justify-center bg-gray-200 hover:bg-gray-300 px-3 py-1 text-xl cursor-pointer rounded-md duration-400' onClick={() =>  setQuantity(quantity === 1 ? 1 : quantity-1)} >-</p>
                    <p className='flex items-center justify-center'>{quantity}</p>
                    <p className='flex items-center justify-center bg-gray-200 hover:bg-gray-300 px-3 py-1 text-xl cursor-pointer rounded-md duration-400' onClick={() =>setQuantity(quantity+1)}>+</p>
                </div>
                <div>
                    <button id='button' className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-b1 active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3' onClick={() =>handleAddtoCart({...product,quantity})}>Add to Cart</button>
                    <button id='button' className='w-full font-titleFont font-medium text-base bg-[#ffa41c] hover:bg-[#FA8900]  duration-200 py-1.5 rounded-md mt-3'>Buy Now</button>
                </div>
                <div className="border-b-[1px] border-gray-300 mt-2"></div>

                <button className='w-full py-1.5 mt-1 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Add to Wishlist</button>
            </div>
        </div>
    );
};

export default SingleProduct;