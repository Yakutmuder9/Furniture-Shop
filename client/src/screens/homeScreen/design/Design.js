import './design.css';

const Design = () => {
  return (
    <div className='design d-md-flex w-100'>
      <div className='designSmapel w-100'></div>
      <div className=' designTextbox w-100 d-flex'>
        <div className=' designText text-light px-4 pt-4'>
          <h2 className=' text-light'>MINIMALIST</h2>
          <h1 className="fw-bold text-light">PRODUCT</h1>
          <h1 className="= pb-2 fw-bold text-light"><span className='CollunderLine mb-3  text-light'>DES</span>IGN</h1>
          <div></div>
          <p className=' text-light'>lorDuis non ea sunt irure. Ad in eu et tempor est. Veniam mollit adipisicing exercitation magna nisi veniam consequat labore sunt dolor mollit nostrud veniam. </p>
          <button className='d-flex align-items-center'>Shop Now <span className="material-symbols-outlined text-light ps-1">
          arrow_forward
        </span></button>
        </div>
        <div className=' designBack text-light '></div>
      </div>
    </div>
  )
}

export default Design;
