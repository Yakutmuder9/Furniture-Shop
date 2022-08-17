import './collection.css'

const Collection = () => {
  return (
    <div className='collection d-flex flex-column align-items-center justify-content-center px-3 pb-5'>
      <div className='px-5 h-50 w-100 d-block d-lg-flex align-items-center justify-content-between'>
        <div className='h-auto w-100 d-block d-md-flex align-items-center justify-content-between px-4'>
          <div className='text-center'>
            <h1><span class="material-symbols-outlined fw-bold ">
              sailing
            </span></h1>
            <h4 className='fw-bold'>FREE SHIPPNG <br></br>WORLDWIDE</h4>
            <h4></h4>
            <p>We offer free shipping via Standard <br></br>Shipping on orders over $200.00</p>
          </div>
          <div className='text-center'>
            <h1><span class="material-symbols-outlined fw-bold">
              approval_delegation
            </span></h1>
            <h4 className='fw-bold'>FREE SHIPPNG <br></br>WORLDWIDE</h4>
            <h4></h4>
            <p>We offer free shipping via Standard <br></br>Shipping on orders over $200.00</p></div>
          <div className='text-center'>
            <h1><span class="material-symbols-outlined  fw-bold">
              support_agent
            </span></h1>
            <h4 className='fw-bold'>FREE SHIPPNG <br></br>WORLDWIDE</h4>
            <h4></h4>
            <p>We offer free shipping via Standard <br></br>Shipping on orders over $200.00</p></div>
        </div>
      </div>


      <div className=' h-50 w-100 d-block d-lg-flex'>
        <div className=' ms-5 ps-4 pe-5 pt-5'>
          <h2>New</h2>
          <h1 class="= pb-2 fw-bold"><span className='CollunderLine mb-3'>Colle</span>ction</h1>
          
          <div></div>
          <p>lorDuis non ea sunt irure. Ad in eu et tempor est. Ut proident enim irure in do incididunt elit adipisicing. Veniam mollit adipisicing exercitation magna nisi veniam consequat labore sunt dolor mollit nostrud veniam. </p>
        </div>
        <div className='d-block d-md-flex align-items-center justify-content-between h-100'>
          <div className='collectionCard shadow my-2 bg-light rounded h-100 mx-2 pb-2'>
            <img src='https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' alt="" />
            <div className="px-3 ">
              <h4>Chair</h4>
              <p>Eu Lorem adipisicing qui sit officia veniam cupidatat excepteur. Aute irure enim esse pariatur.</p>
              <h4>$180</h4>
            </div>
          </div>
          <div className='collectionCard shadow my-2 bg-light rounded h-100 mx-2 pb-2'>
            <img src='https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' alt="" />
            <div className="px-3 ">
              <h4>Lump</h4>
              <p>Eu Lorem adipisicing qui sit officia veniam cupidatat excepteur. Aute irure enim esse pariatur.</p>
              <h4>$135</h4>
            </div>
          </div>
          <div className='collectionCard shadow my-2 bg-light rounded h-100 mx-2 pb-2'>
            <img src='https://images.unsplash.com/photo-1557592722-a0a649c8c5c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt="" />
            <div className="px-3 ">
              <h4>Tabel</h4>
              <p>Eu Lorem adipisicing qui sit officia veniam cupidatat excepteur. Aute irure enim esse pariatur.</p>
              <h4>$229</h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection;
