import './promotion.css'

const Promotion = () => {
  return (<div className='promotion d-md-flex w-100'>
    <div className=' promotionTextbox w-100 d-flex'>
      <div className='promotionText text-light px-4 pt-4'>
        <h6 className=' text-light'>Kitchen Stuffs</h6>
        <h1 className="fw-bold text-light">Save Up to</h1>
        <h1 className="= pb-2 fw-bold text-light">50% OFF
          </h1>
        <button className='d-flex align-items-center'>Shop Now <span className="material-symbols-outlined text-light ps-1">
          arrow_forward
        </span></button>
      </div>
      <div className=' promotionBack text-light '></div>
    </div>
  </div>
  )
}

export default Promotion
