import Navbar from "../navbar/Navbar";
import Dashboard from "../dashboard/Dashboard";
import Cart from "../cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const getCategories = () => {
    axios
      .get(" http://localhost:3000/categories")
      .then((response) => setCategories(response.data));
  };
  const changeCategory = (category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.seoUrl);
  };
  const addToCart = (product) => {
    let newCart = cart;
    let addItem = newCart.find((p) => p.product.id === product.id);
    if (addItem) {
      addItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    let newCart = cart.filter((c) => c.product.id !== product.id);
    setCart(newCart);
  };
  const getProducts = (seoUrl) => {
    let url = "http://localhost:3000/products";
    if (seoUrl) {
      url += "?seoUrl=" + seoUrl;
    }
    axios.get(url).then((response) => setProducts(response.data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Dashboard
              addToCart={addToCart}
              currentCategory={currentCategory}
              changeCategory={changeCategory}
              categories={categories}
              products={products}
              setProducts={setProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
