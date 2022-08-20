import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import './productScreen.css'

const ProductScreen = () => {
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
          <span class="material-symbols-outlined">
            empty_dashboard
          </span>
          <span class="material-symbols-outlined">
            grid_view
          </span>
          <span class="material-symbols-outlined">
            expand_more
          </span>
        </div>

      </div>
      <div className='productList d-md-flex d-block px-4'>

        <div className='ps-5 d-flex d-md-block me-5 pe-5 '>
          <div>
            <ul className=''>
              <h4>Catagories</h4>
              <li><input type="checkbox" id="myCheck" onclick=""/> Tabel</li>
              <li><input type="checkbox" id="myCheck" onclick=""/> Chair</li>
              <li><input type="checkbox" id="myCheck" onclick=""/> Bed</li>
              <li><input type="checkbox" id="myCheck" onclick=""/> Other</li>
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
        <div class="container py-3">
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="border bg-light shadow rounded">
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
      <Footer />

    </>

  )
}

export default ProductScreen
