import './product.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../../redux/features/productSlices';
import Loading from "../../../components/LoadingError/Loading";
import Message from "../../../components/LoadingError/Error"
import { Link } from "react-router-dom";
import Rate from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Product = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.getProduct);
  const { isLoading, errMess, productsArray } = productList;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  
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
          {isLoading ? (
            <div className="mb-5">
              <Loading />
            </div>
          ) : errMess ? (
            <Message variant="alert-danger">{errMess}</Message>
          ) : (
            <>
              {productsArray && productsArray.slice(0, 4).map((item, _id) => {
                return (<>product.js</>
                  // <div className="col-12 col-md-6 col-lg-3">
                  //   <div className="border bg-light shadow rounded">

                  //     <Link to={`/product`}>
                  //       <img src={item.images[0].image} alt='' className="mb-2 p-0" />
                  //     </Link>
                  //     <div className='w-100 productDesc px-3 pb-3'>
                  //       <div className='productName w-100 d-flex align-items-center justify-content-between'><h4>Chair</h4>
                  //         <Stack spacing={1} className="ms-1">
                  //           <Rate name="size-medium" defaultValue={item.rating} />
                  //         </Stack></div>
                  //       <p className='w-100'>Ullamco ullamco tempor culpa ad dolore  reprehenderit.</p>
                  //       <div className="w-100 d-flex align-items-center justify-content-between">
                  //         <h5>$180</h5>
                  //         <button>Add to Cart</button>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                )
              })}
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default Product
