import './blog.css';

const Blog = () => {
  return (
    
    <div className='blog py-4 px-4'>
      <div className='blogText d-flex flex-column align-items-center mb-4'>
        <h1 className='mt-2 mb-3'>Our <span className="underline">Blog</span></h1>
        <p className=' mb-4'>lorDuis non ea sunt irure. Ad in eu et tempor est. Ut proident enim irure in do incididunt elit adipisicing.</p>
      </div>
      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="">
              <img src='https://media.istockphoto.com/photos/is-this-table-big-enough-picture-id1350859198?b=1&k=20&m=1350859198&s=170667a&w=0&h=_-YOX2Bq2oazI55GnqwEuU34lGf6iko52dLntqkVtvw=' alt='' className="mb-2 p-0" />
              <div className='w-100 blogDescpb-3'>
                <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
                <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <a>Read more</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="">
              <img src='https://images.unsplash.com/photo-1557367184-663fba4b8b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29vZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
              <div className='w-100 blogDescpb-3'>
                <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
                <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <a>Read more</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="">
              <img src='https://images.unsplash.com/photo-1534532335525-79868382477e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvb2QlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt='' className="mb-2 p-0" />
              <div className='w-100 blogDescpb-3'>
                <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
                <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  <a>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
