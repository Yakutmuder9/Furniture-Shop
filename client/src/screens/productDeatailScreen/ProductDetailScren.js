import { useEffect, useState } from "react";
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import './productDetail.css'
import { useLocation } from "react-router";
import Message from "../../components/LoadingError/Error";
import axios from "axios";
import Loading from "../../components/LoadingError/Loading";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Rate from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import Stack from '@mui/material/Stack';
import { addToCart } from "../../redux/features/CartSlice";
import {Link} from "react-router-dom";

const ProductDetailScreen = () => {
  const [product, setProduct] = useState('');
  const [ImgOne, setImgOne] = useState('');
  const [ImgTwo, setImgTwo] = useState('');
  const [ImgThree, setImgThree] = useState('');
  const [ImgFour, setImgFour] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [errMess, setError] = useState("");
  const paramsId = useLocation();
  const dispatch = useDispatch()
  const productId = paramsId.pathname.slice(9, 36);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`/product/${productId}`);
        setProduct(data)
        setImgOne(data.images[0].image)
        setImgTwo(data.images[1].image)
        setImgThree(data.images[2].image)
        setImgFour(data.images[4].image)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  const notify = () => toast("Adding to the cart!");
  const handleAddToCart = (product) => {
    notify()
    dispatch(addToCart(product));
  };

  return (
    <>
      <Header />
      <div className='productMain'>
        <h1 className='fw-bold'>Product Detail</h1>
        <h6 >Home-Product-Wood Tabel</h6>
      </div>

      <div className='w-100 align-items-center justify-content-between px-4 py-3'>
        <div className='row d-block d-md-flex px-4 mx-4'>
          {isLoading ? (
            <div className="mb-5">
              <Loading />
            </div>
          ) : errMess ? (
            <Message variant="alert-danger">{errMess}</Message>
          ) : (
            <>
            new
              {/* <div className='col-12 col-md-5 p-0' style={{ height: "500px", marginBottom: "100px" }}>
                <div className="bg-primary w-100" style={{ height: "300px" }}>
                  <img src={`/${ImgOne}`} className="w-100 h-100" />
                </div>

                <div className='row'>
                  <div className='col-4 pe-0'>
                    <img src={`/${ImgTwo}`} className='w-100 border' style={{ height: "100%" }} /></div>
                  <div className='col-4 p-0'>  <img src={`/${ImgThree}`} className='w-100 border' style={{ height: "100%" }} /></div>
                  <div className='col-4 ps-0'>  <img src={`/${ImgFour}`} className='w-100 border' style={{ height: "100%" }} /></div>
                </div>
              </div>
              <div className='col-12 col-md-7  p-3' >
                <div className='d-flex w-100 justify-content-between'>
                  <div className='d-flex '>
                    <h2 className='me-2 '>{product.name}</h2>
                  </div>

                  <div className='d-flex'>
                    <div>
                      <Stack spacing={1} className="ms-1">
                        <Rate name="size-medium" defaultValue={product.rating} size="large" />
                      </Stack>
                      <p>Reatings</p>
                    </div>
                  </div>

                </div>
                <div className='d-flex w-50 justify-content-between'>
                  <div className='d-flex'>
                    <h2>${product.price}</h2>
                    <p>${product.price + 28}</p>
                  </div>
                  <div>
                    <span className="material-symbols-outlined">
                      favorite
                    </span>
                    <span className="material-symbols-outlined">
                      share
                    </span>
                  </div>
                </div>

                <p>Avaliable in staock</p>
                <p>{product.description}</p>
                <h5>Color</h5>
                <div>
                  <input type="checkbox" id="myCheck" /><input type="checkbox" id="myCheck" /><input type="checkbox" id="myCheck" />
                </div>
                <h5>Quantity</h5>
                <input type="checkbox" id="myCheck" />
                <div className='d-flex'>
                  <button className='btn me-4 text-light' onClick={() => handleAddToCart(product)} style={{background: "#301f01"}}>Add to Cart</button>
                  <ToastContainer />
                  <Link to="/product" className='btn ' style={{border: "2px solid #301f01"}}>Shop Now</Link>
                </div>
              </div> */}
            </>
          )}

        </div>

        <div className='contanet px-3 mx-4'>

          <h2>Related Product</h2>

          <div className='row g-2 px-3'>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1568102106687-13401de952dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' className='w-100' />
              <h5>Lamp</h5>
              <div className='d-flex'>
                <Stack spacing={1} className="ms-1">
                  {/* <Rate name="size-medium" defaultValue={product.rating} size="large" /> */}
                </Stack>
              </div>
              <p>Gupidatat velit veniam cupidatat enim proident duis adipisicing ullamco.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' className='w-100' />
              <h5>Lamp</h5>
              <div className='d-flex'>
                <Stack spacing={1} className="ms-1">
                  {/* <Rate name="size-medium" defaultValue={product.rating} size="large" /> */}
                </Stack>
              </div>
              <p>Gupidatat velit veniam cupidatat enim proident duis adipisicing ullamco.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' className='w-100' />
              <h5>Chair</h5>
              <div className='d-flex'>
                <Stack spacing={1} className="ms-1">
                  {/* <Rate name="size-medium" defaultValue={product.rating} size="large" /> */}
                </Stack>
              </div>
              <p>Gupidatat velit veniam cupidatat enim proident duis adipisicing ullamco.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' className='w-100' />
              <h5>Chair</h5>
              <div className='d-flex'>
                      <Stack spacing={1} className="ms-1">
                        {/* <Rate name="size-medium" defaultValue={product.rating} size="large" /> */}
                      </Stack>
              </div>
              <p>Gupidatat velit veniam cupidatat enim proident duis adipisicing ullamco.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>

  )
}

export default ProductDetailScreen
