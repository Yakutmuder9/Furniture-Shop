import './product.css'

const Product = () => {
  return (
    <div className='product py-4 px-4'>
      <div className='productText d-flex flex-column align-items-center mb-4'>
        <h1 className='mt-2 mb-3'>Our <span className="underline">Prod</span><span>ucts</span></h1>
        <p className=' mb-4'>lorDuis non ea sunt irure. Ad in eu et tempor est. Ut proident enim irure in do incididunt elit adipisicing.</p>
        <div className='d-flex justify-content-between'>
          <button className='mx-2'>Chair</button>
          <button className='mx-2'>Tabel</button>
          <button className='mx-2'>Cabiner </button>
          <button className='mx-2'>Other </button>
        </div>
      </div>
      <div className="container">
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-3">
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
  )
}

export default Product
