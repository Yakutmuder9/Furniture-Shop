import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import './productScreen.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../redux/features/productSlices';
import Loading from "../../components/LoadingError/Loading";
import Message from "../../components/LoadingError/Error"
import Rate from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from "../../redux/features/CartSlice";

const ProductScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.getProduct);
  const { isLoading, errMess, productsArray } = productList;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const notify = () => toast("Adding to the cart!");
  const handleAddToCart = (course) => {
    notify()
    dispatch(addToCart(course));
  };
  return (
    <>
      <Header />
      <div className='productMain mb-2'>
        <h1 className='fw-bold'>Our Product</h1>
        <h6 >Home-product</h6>
      </div>

      <div className='d-flex w-100 align-items-center justify-content-between pe-4 pt-3'>
        <div></div>
        <div>
          <span className="material-symbols-outlined">
            empty_dashboard
          </span>
          <span className="material-symbols-outlined">
            grid_view
          </span>
          <span className="material-symbols-outlined">
            expand_more
          </span>
        </div>

      </div>
      <div className='productList d-md-flex d-block px-4'>

        <div className=' d-flex d-md-block  productfilter me-2 h-100 rounded'>
          <div>
            <ul className=''>
              <h4>Catagories</h4>
              <li><input type="checkbox" id="myCheck" /> Kitchen</li>
              <li><input type="checkbox" id="myCheck" /> Living</li>
              <li><input type="checkbox" id="myCheck" /> Bed</li>
              <li><input type="checkbox" id="myCheck" /> Other</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>Brands</h4>
              <li><input type="checkbox" id="myCheck" /> Ashley HomeStore </li>
              <li><input type="checkbox" id="myCheck" /> Furniture of America </li>
              <li><input type="checkbox" id="myCheck" /> New Classic Home</li>
              <li><input type="checkbox" id="myCheck" /> other </li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>Filter By Price</h4>
              <li><input type="checkbox" id="myCheck" /> $0-$500</li>
              <li><input type="checkbox" id="myCheck" /> $500-$1000</li>
              <li><input type="checkbox" id="myCheck" /> $1000-$2000</li>
              <li><input type="checkbox" id="myCheck" /> $2000++ </li>
            </ul>
          </div>
        </div>
        <div className="container pt-3 pb-3">
          <div className="row g-4">

            {isLoading ? (
              <div className="mb-5">
                <Loading />
              </div>
            ) : errMess ? (
              <Message variant="alert-danger">{errMess}</Message>
            ) : (
              <>
                {productsArray && productsArray.map((item, _id) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-4" key={_id}>
                      <div className="border bg-light shadow rounded  pb-0" style={{ height: "500px" }}>
                        <Link to={`/product/${item._id}`}>
                          {/* <img src={item.images[0].image} alt='' className="mb-2 p-0" style={{ height: "250px" }} /> */}
                        </Link>


                        <div className='w-100  productDesc px-3 d-flex flex-column justify-content-between' style={{ height: "220px" }}>
                          <div className='productName w-100 d-flex justify-content-between'>
                            <h5>{item.name}</h5>
                            <Stack spacing={1} className="ms-1">
                              <Rate name="size-medium" defaultValue={item.rating} />
                            </Stack>
                          </div>
                          <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <h5>${item.price}.00</h5>
                            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                          </div>
                        </div>
                                <ToastContainer />
                      </div>
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />

    </>

  )
}

export default ProductScreen


{/* <div className="col-12 col-md-6 col-lg-4">
  <div className="border bg-light shadow rounded">
                <img src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
                <div className='w-100 productDesc px-3 pb-3'>
                  <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>Chair</h4><p>Rating</p></div>
                  <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <h5>$180</h5>
                    <button>Add to Cart</button>
                  </div>
                </div>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
              <div className="border bg-light shadow rounded">
                <img src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
                <div className='w-100 productDesc px-3 pb-3'>
                  <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>Chair</h4><p>Rating</p></div>
                  <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <h5>$180</h5>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
              <div className="border bg-light shadow rounded">
                <img src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
                <div className='w-100 productDesc px-3 pb-3'>
                  <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>Chair</h4><p>Rating</p></div>
                  <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <h5>$180</h5>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
              <div className="border bg-light shadow rounded">
                <img src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
                <div className='w-100 productDesc px-3 pb-3'>
                  <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>Chair</h4><p>Rating</p></div>
                  <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <h5>$180</h5>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
              <div className="border bg-light shadow rounded">
                <img src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
                <div className='w-100 productDesc px-3 pb-3'>
                  <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>Chair</h4><p>Rating</p></div>
                  <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <h5>$180</h5>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
              <div className="border bg-light shadow rounded">
                <img src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
                <div className='w-100 productDesc px-3 pb-3'>
                  <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>Chair</h4><p>Rating</p></div>
                  <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <h5>$180</h5>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
</div> */}