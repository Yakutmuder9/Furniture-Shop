import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import {Link} from 'react-router-dom';

const aboutScreen = () => {
  return (
    <>
      <Header />
      <div className='productMain mb-4 '>
        <h1 className='fw-bold'>About Us</h1>
        <h6 >About</h6>
      </div>
      <div class="row g-4 ">
        <div class="col-12">
          <div class="d-block d-md-flex px-4">
            <div className="mb-2 p-4 w-100">
              <img src='https://media.istockphoto.com/photos/is-this-table-big-enough-picture-id1350859198?b=1&k=20&m=1350859198&s=170667a&w=0&h=_-YOX2Bq2oazI55GnqwEuU34lGf6iko52dLntqkVtvw=' alt='' className='w-100 '  style={{height: '400px'}}/>
            </div>

            <div className='mb-2 py-4 w-100 px-5'>
              <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>About us amet pariatur dolore dolore et non mollit minim. </h3></div>
              <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.Ullamco id reprehenderit aliquip mollit velit anim consectetur laboris sit consequat. Sunt occaecat in amet Lorem occaecat qui quis commodo veniam est labore. Voluptate irure eiusmod ullamco amet ullamco non non ullamco do laboris adipisicing. Cupidatat quis dolor commodo commodo ut laboris et ullamco ex labore. Aliqua mollit enim anim est exercitation ex tempor.</p>
              <p>Sit cillum est aliquip dolor ullamco nulla enim id laboris reprehenderit deserunt nostrud. Labore voluptate sunt commodo ex adipisicing labore qui eu ipsum consectetur est. Consequat fugiat veniam sint id eiusmod aliquip. Elit deserunt nulla consectetur minim aliquip consequat laborum est. Proident culpa veniam laboris fugiat labore.</p>
              <Link to="/" className='text-decoration-none'>Read more</Link>
            </div>
          </div>
        </div>
        <div class="col-12">

            <div className='mb-2 py-4 w-100 px-5'>
              <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
              <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
              <p>Dolor cillum nostrud velit laboris deserunt nulla veniam consequat ut pariatur minim. Commodo est sunt qui culpa non nulla nulla voluptate. Exercitation cillum id irure eiusmod eiusmod duis et ea minim consequat in.</p>
              <Link to="/" className='text-decoration-none'>Read more</Link>
       
          </div>
        </div>
        <div class="col-12">
            <div className='mb-2 py-4 w-100 px-5'>
              <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
              <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
              <p>Qui enim esse cupidatat quis dolore occaecat. Sunt adipisicing aliqua duis id in elit deserunt ea cupidatat consectetur. Adipisicing cillum consequat nostrud velit laboris mollit anim quis reprehenderit et. Id labore do laborum aliquip esse officia nulla labore ea. Dolore pariatur laboris mollit eu ullamco. Irure qui eiusmod Lorem aliquip anim sunt eu excepteur ullamco laborum incididunt consequat consectetur.Qui non consequat Lorem aute officia enim irure dolor laboris aute ex exercitation. Mollit mollit culpa nostrud consequat est. Cupidatat et ad cillum sit tempor est. Proident duis tempor nisi aliqua occaecat veniam.</p>
              <Link to="/" className='text-decoration-none'>Read more</Link>
            
          </div>
        </div>
        <div class="col-12">
            <div className='mb-2 py-4 w-100 px-5'>
              <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Ullamco occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
              <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
              <p>Qui enim esse cupidatat quis dolore occaecat. Sunt adipisicing aliqua duis id in elit deserunt ea cupidatat consectetur. Adipisicing cillum consequat nostrud velit laboris mollit anim quis reprehenderit et. Id labore do laborum aliquip esse officia nulla labore ea. Dolore pariatur laboris mollit eu ullamco. Irure qui eiusmod Lorem aliquip anim sunt eu excepteur ullamco laborum incididunt consequat consectetur.a labore ea. Dolore pariatur laboris mollit eu ullamco. Irure qui eiusmod Lorem aliquip anim sunt eu excepteur ullamco laborum incididunt consequat consectetur.</p>
              <Link to="/" className='text-decoration-none'>Read more</Link>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default aboutScreen
