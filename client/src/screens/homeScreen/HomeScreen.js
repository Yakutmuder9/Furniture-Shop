import './homeScreen.css';
import Main from './main/Main';
import Collection from "./collection/Collection";
import Design from "./design/Design";
import Product from "./product/Product";
import Promotion from "./promotion/Promotion";
import Blog from "./bolg/Blog";
import Footer from "../../components/footer/Footer";


const HomeScreen = () => {

  return (
    <div className="homeScreen ">
      <Main />
      <Collection />
      <Design />
      <Product />
      <Promotion />
      <Blog />
      <Footer />
    </div>
  )
}

export default HomeScreen
