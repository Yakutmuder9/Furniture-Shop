import './main.css'
import Header from '../../../components/header/Header'
const Main = () => {

  return (
    <div className='main'>
      <div className='w-100 bg-none'>
        <Header />
      </div>
      <div className='mainText'>
        <p className='pt-5'>Furniture that everyone loves</p>
        <h1 className='mainButyText'>The beauty of </h1>
        <h1 className='mainNaturalText '>natural wood. </h1>
        <button className='d-flex align-items-center'>Shop Now <span class="material-symbols-outlined text-light ps-1">
          arrow_forward
        </span></button>
      </div>
      <div className='mainImg py-5 px-4'>
        <img src='https://images.unsplash.com/photo-1633109870201-318921e3f992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80' alt='' className=' mx-2' />
        <img src='https://images.unsplash.com/photo-1617126481205-cdf29da03b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80' />
       
        <img src='https://images.unsplash.com/photo-1578854888566-a4fde9f0b0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt='' className=' mx-2' />
        <img src='https://images.unsplash.com/photo-1600488999806-8efb986d87b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt='' className='mx-2' />
        <img src='https://images.unsplash.com/photo-1611005893660-34445879f48a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' className=' mx-2' />
      </div>
    </div>
  )
}

export default Main
