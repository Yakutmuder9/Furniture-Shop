import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import './productScreen.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const ProductScreen = () => {
  let [product, setproduct] = useState([]);

  async function fetchData() {
    let response = await axios(`products`);
    let data = await response.data;
    setproduct(data);
    // console.log(product.images[0].id);
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Header />
      <div className='productMain'>
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

        <div className='ps-5 d-flex d-md-block me-5 pe-5 '>
          <div>
            <ul className=''>
              <h4>Catagories</h4>
              <li><input type="checkbox" id="myCheck" /> Tabel</li>
              <li><input type="checkbox" id="myCheck" /> Chair</li>
              <li><input type="checkbox" id="myCheck" /> Bed</li>
              <li><input type="checkbox" id="myCheck" /> Other</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>Brands</h4>
              <li>Lorem ipsum</li>
              <li>Lorem </li>
              <li>Lorem ipsum</li>
              <li>Lorem </li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>Filter By Price</h4>
              <li>$0-$100</li>
              <li>$100-$300</li>
              <li>$300-$1000</li>
              <li>$1000++ </li>
            </ul>
          </div>
        </div>
        <div className="container py-3">
          <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
              
            </div>
            {product && product.map((item, _id) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={_id}>
                  <div className="border bg-light shadow rounded">
                    <img src={"./"} alt='' className="mb-2 p-0" />
                    <div className='w-100 productDesc px-3 pb-3'>
                      <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>{item.name}</h4><p>Rating</p></div>
                      <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <h5>${item.cost}</h5>
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}
           
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

          </div>
        </div>
      </div>
      <Card />
      <Footer />

    </>

  )
}

export default ProductScreen
