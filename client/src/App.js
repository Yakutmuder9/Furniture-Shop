import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import NotFound from "./screens/NotFound";
import HomePage from "./screens/homeScreen/HomeScreen";

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;