import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/login/LogIn"
import SignUp from "./screens/signup/SignUp";
import NotFound from "./screens/NotFound";
import HomePage from "./screens/homeScreen/HomeScreen";
import ProductScreen from "./screens/productScreen/ProductScreen";
import ProductDeatailScren from "./screens/productDeatailScreen/ProductDetailScren";
import AboutScreen from "./screens/abourScreen/AboutScreen";
import Blog from "./screens/blog/Blog";
import ReasonScreen from "./screens/reasonScreen/ReasonScreen";
import CartScreen from "./screens/cartScreen/CartScreen";

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="product" element={<ProductScreen />} />
        <Route path="product/:id" element={<ProductDeatailScren />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="blog" element={<Blog />} />
        <Route path="reson" element={<ReasonScreen />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;