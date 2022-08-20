import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import NotFound from "./screens/NotFound";
import HomePage from "./screens/homeScreen/HomeScreen";
import ProductScreen from "./screens/productScreen/ProductScreen";
import ProductDeatailScren from "./screens/productDeatailScreen/ProductDetailScren";
import AboutScreen from "./screens/abourScreen/AboutScreen";
import Blog from "./screens/blog/Blog";
import ReasonScreen from "./screens/reasonScreen/ReasonScreen";

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="product" element={<ProductScreen />}/>
        <Route path="productdetail" element={<ProductDeatailScren />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="blog" element={<Blog />} />
        <Route path="reson" element={<ReasonScreen />} />
        <Route path="cart" element={<ReasonScreen />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;