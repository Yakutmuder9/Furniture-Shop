import './main.css'
import Header from '../../../components/header/Header';
import { Link } from 'react-router-dom';
const Main = () => {

  return (<>
    <Header />
    <div className='main'>
      <div className='w-100 bg-none'>
      </div>
      <div className='mainText'>
        <p className='pt-5'>Furniture that everyone loves</p>
        <h1 className='mainButyText'>The beauty of </h1>
        <h1 className='mainNaturalText '>natural wood. </h1>
        <Link className='d-flex align-items-center' to="/product">Shop Now <span className="material-symbols-outlined text-light ps-1">
          arrow_forward
        </span></Link>
      </div>
    </div>
  </>

  )
}

export default Main
