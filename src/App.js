import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
// import { productsdata } from './api/api';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Register from './pages/Register';
import { toast, Toaster } from 'react-hot-toast';
import Checkout from './pages/Checkout';
import PrivateRoute from './privateRoute/PrivateRoute';
import SingleProduct from './components/SingleProduct/SingleProduct';
import useProducts from './api/useProducts';
// import SearchResults from './pages/SearchResults';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import app from './firebase/firebase.config';

const Main = ({ cartItems, handleSearchProduct, setSearchQuery }) => {
  return (
    <div>
      <Header cartItems={cartItems} handleSearchProduct={handleSearchProduct} setSearchQuery={setSearchQuery} />
      <Outlet />
      <Footer />
    </div>
  )
}


function App() {

  const [cartItems, setCartItems] = useState([]);
  const [products] = useProducts();
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState({});
  


  //Add to cart functionality
  const handleAddtoCart = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      const newCartItems = cartItems.map(x => x.id === product.id ? { ...exists, qty: product.quantity ? exists.qty + product.quantity : exists.qty + 1 } : x);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    else {
      const newCartItems = [...cartItems, { ...product, qty: product.quantity ? product.quantity : 1 }];
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    toast.success("Product Added to cart");
  }




  const handleDelete = (product) => {

    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      const newCartItems = cartItems.filter(x => x.id !== product.id);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    else {
      const newCartItems = cartItems.map(x => x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }

  }


  const handleDeleteproduct = (productItem) => {
    const exists = cartItems.find((x) => x.id === productItem.id);
    if (exists) {
      const product = cartItems.filter(x => x.id !== productItem.id);
      setCartItems(product);
      saveProductLocalstorage(product);
    }
    toast.success("Product deleted from cart");

  }


  //Save cart details to localstorage for each interaction for addTocart and delete functionality
  const saveProductLocalstorage = cart => {
    if (cart) {
      localStorage.setItem('CartItem', JSON.stringify(cart));
    }
  }


  //Get cart details from Local Storage
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('CartItem'));
    if (localData) {
      setCartItems(localData);
    }
  }, []);


  const handleSearchProduct = (category, keyword) => {
    setCategory(category);
    setSearchQuery({category, keyword});
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Main cartItems={cartItems} handleSearchProduct={handleSearchProduct} setSearchQuery={setSearchQuery}/>}>
        <Route index element={<Home cartItems={cartItems} handleAddtoCart={handleAddtoCart} handleDelete={handleDelete} products={products} category={category} searchQuery={searchQuery}/>} >
        </Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} handleDelete={handleDelete} handleDeleteproduct={handleDeleteproduct} handleAddtoCart={handleAddtoCart} />}>
        </Route>
        <Route path="/checkout" element={<PrivateRoute><Checkout ></Checkout></PrivateRoute>}>
        </Route>
        <Route path="/singleproduct/:id" element={<SingleProduct handleAddtoCart={handleAddtoCart} handleDelete={handleDelete} products={products}></SingleProduct>} >
        </Route>
        {/* <Route path="/searchresult" element={<SearchResults handleAddtoCart={handleAddtoCart} handleDelete={handleDelete} products={products}></SearchResults>} >
        </Route> */}
      </Route>
      <Route path="/signin" element={<Signin />}>
      </Route>
      <Route path="/signup" element={<Register />}>
      </Route>
    </>
  ))




  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
