import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import './productDetail.css'

const ProductDetailScren = () => {
  return (
    <>
      <Header />
      <div className='productMain'>
        <h1 className='fw-bold'>Product Detail</h1>
        <h6 >Home-Product-Wood Tabel</h6>
      </div>

      <div className='w-100 align-items-center justify-content-between px-4 py-3'>

        <div className='row d-block d-md-flex px-4 mx-4'>
          <div className='col-12 bg-danger col-md-5 p-0'  style={{height: "500px", marginBottom:"100px"}}>
            <div className="bg-primary w-100" style={{height: "300px"}}>
              <img src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' className="w-100 h-100"/>
              </div>

            <div className='row'>
              <div className='col-4 pe-0'>  <img src='https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' className='w-100' style={{height: "100%"}} /></div>
              <div className='col-4 p-0'>  <img src='https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' className='w-100' style={{height: "100%"}} /></div>
              <div className='col-4 ps-0'>  <img src='https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' className='w-100' style={{height: "100%"}}/></div>
            </div>
          </div>
          <div className='col-12 col-md-7  p-3' >
            <div className='d-flex'>
              <h2>Wood Table</h2>
              <span class="material-symbols-outlined">
                favorite
              </span>
              <span class="material-symbols-outlined">
                share
              </span>
            </div>
            <div className='d-flex'>
              <span class="material-symbols-outlined">
                star_rate
              </span><span class="material-symbols-outlined">
                star_rate
              </span><span class="material-symbols-outlined">
                star_rate
              </span>
              <div><span class="material-symbols-outlined">
                star_half
              </span>
                <span class="material-symbols-outlined">
                  grade
                </span>
                <p>Reatings</p>
              </div>

            </div>
            <div className='d-flex'>
              <h2>$370</h2>
              <p>$430</p>
            </div>
            <p>Avaliable in staock</p>
            <p>Consectetur excepteur laborum exercitation cupidatat velit veniam cupidatat enim proident duis adipisicing ullamco. Pariatur magna ullamco sunt dolor amet ex sint ut pariatur anim esse proident incididunt. Nostrud ipsum occaecat est do ex mollit deserunt eu mollit Lorem adipisicing sint duis.</p>
            <h5>Color</h5>
            <div>
              <input type="checkbox" id="myCheck" onclick="" /><input type="checkbox" id="myCheck" onclick="" /><input type="checkbox" id="myCheck" onclick="" />
            </div>
            <h5>Quantity</h5>
            <input type="checkbox" id="myCheck" onclick="" />
            <div className='d-flex'>
              <button className='btn btn-secondary me-4'>Add to Cart</button>
              <button className='btn btn-outline-secondary'>Shop Now</button>
            </div>
          </div>
        </div>

        <div className='contanet px-3 mx-4'>

          <h2>Related Product</h2>

          <div className='row g-2 px-3'>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1568102106687-13401de952dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' className='w-100' />
              <h5>Table</h5>
              <div className='d-flex'>
                <span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span>
              </div>
              <p>Gupidatat velit veniam cupidatat enim proident duis adipisicing ullamco.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' className='w-100' />
              <h5>Table</h5>
              <div className='d-flex'>
                <span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span>
              </div>
              <p>Gupidatat velit veniam cupidatat enim proident duis adipisicing ullamco.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' className='w-100' />
              <h5>Table</h5>
              <div className='d-flex'>
                <span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span>
              </div>
              <p>Gupidatat velit veniam cupidatat enim proident duis adipisicing ullamco.</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-0'>
              <img src='https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' className='w-100' />
              <h5>Table</h5>
              <div className='d-flex'>
                <span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span><span class="material-symbols-outlined">
                  grade
                </span>
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

export default ProductDetailScren
