import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerForm pt-3 text-center text-light '>
        <p className='text-light'>Special Offer For Subscribers</p>
        <h1 className='text-light'>10% Member Discount</h1>
        <p className='text-light'>Subscriber our news letters now and stay up to date with <br></br>new collection the latest lookboobs and active offers.</p>
        <form>
          <div >
            <input placeholder='Enter your Email here' className='px-4 py-2 rounded' />
            <button className='px-4 py-2 rounded'>Subscribe</button>
          </div>
        </form>
      </div>

      <div className='footerLoc d-flex w-100 px-5'>
        <div className='d-flex w-100 h-100 justify-content-center pt-3'>
          <h1 className='text-light'>Go Furniture</h1>
          <p className='d-none d-md-block ps-4'>Minim veniam proident ipsum aliqua duis ex minim.<br></br> Nostrud id commodo consequat nulla velit esse ad.</p>
        </div>
        <div className='footerSocial d-flex w-100 justify-content-end pt-3'>
          <span className="material-symbols-outlined text-light">
            person_add
          </span><span className="material-symbols-outlined text-light mx-5">
            person_add
          </span><span className="material-symbols-outlined text-light">
            person_add
          </span>
        </div>
      </div>
      <p className='pb-4 w-100 text-center bg-transparent d-md-none'>Copyright Ⓒ 2022 Go Furniture All Right Reserved</p>
    </div>
  )
}

export default Footer
