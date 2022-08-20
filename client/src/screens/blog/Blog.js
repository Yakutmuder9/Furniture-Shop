import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import {Link} from "react-router-dom"
const Blog = () => {
  return (
    <>
      <Header />
      <div className='productMain mb-4'>
        <h1 className='fw-bold'>Our Blog</h1>
        <h6 >Blogs</h6>
      </div>
      <div class="row g-4">
        <div class="col-12">
          <div class="d-block d-md-flex px-4">
            <div className="mb-2 p-4 w-100">
              <img src='https://media.istockphoto.com/photos/is-this-table-big-enough-picture-id1350859198?b=1&k=20&m=1350859198&s=170667a&w=0&h=_-YOX2Bq2oazI55GnqwEuU34lGf6iko52dLntqkVtvw=' alt='' className='w-100 '  style={{height: '400px'}}/>
            </div>

            <div className='mb-2 p-4 w-100'>
              <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
              <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
              <p>Sit cillum est aliquip dolor ullamco nulla enim id laboris reprehenderit deserunt nostrud. Labore voluptate sunt commodo ex adipisicing labore qui eu ipsum consectetur est. Consequat fugiat veniam sint id eiusmod aliquip. Elit deserunt nulla consectetur minim aliquip consequat laborum est. Proident culpa veniam laboris fugiat labore.</p>
              <Link to="/" className='text-decoration-none'>Read more</Link>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="d-block d-md-flex px-4">
            <div className="mb-2 p-4 w-100">
              <img src='https://images.unsplash.com/photo-1557367184-663fba4b8b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29vZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' alt='' className='w-100 '  style={{height: '400px'}}/>
            </div>

            <div className='mb-2 p-4 w-100'>
              <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
              <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
              <p>Dolor cillum nostrud velit laboris deserunt nulla veniam consequat ut pariatur minim. Commodo est sunt qui culpa non nulla nulla voluptate. Exercitation cillum id irure eiusmod eiusmod duis et ea minim consequat in.</p>
              <Link to="/" className='text-decoration-none'>Read more</Link>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="d-block d-md-flex px-4">
            <div className="mb-2 p-4 w-100">
              <img src='https://images.unsplash.com/photo-1534532335525-79868382477e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvb2QlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt='' className='w-100 ' style={{height: '400px'}} />
            </div>

            <div className='mb-2 p-4 w-100'>
              <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
              <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
              <p>Qui enim esse cupidatat quis dolore occaecat. Sunt adipisicing aliqua duis id in elit deserunt ea cupidatat consectetur. Adipisicing cillum consequat nostrud velit laboris mollit anim quis reprehenderit et. Id labore do laborum aliquip esse officia nulla labore ea. Dolore pariatur laboris mollit eu ullamco. Irure qui eiusmod Lorem aliquip anim sunt eu excepteur ullamco laborum incididunt consequat consectetur.</p>
              <Link to="/" className='text-decoration-none'>Read more</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
