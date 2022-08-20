import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom"

const CartScreen = () => {
    return (
        <>
            <Header />

            <div class="container overflow-hidden text-center mt-5 pt-4 mb-4" style={{zIndex:"1"}}>
                <div class="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                </div>
                <div class="row gx-3">
                    <div class="col-12 col-md-8">
                        <div class="d-block d-md-flex px-4">
                            <div className="mb-2 p-4 w-100">
                                <img src='https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' alt='' className='' style={{ height: '320px' }} />
                            </div>

                            <div className='mb-2 p-4 w-100'>
                                <div className='blogName w-100 d-flex align-items-center justify-content-between'><h3>Name occaecat amet pariatur dolore dolore et non mollit minim. </h3></div>
                                <p className='w-100'>Discription ullamco tempor culpa ad dolore  reprehenderit.</p>
                                <p>Sit cillum est aliquip dolor ullamco nulla enim id laborislaborum est. Proident culpa veniam laboris fugiat labore.</p>
                                <Link to="/" className='text-decoration-none'>Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="p-3 border bg-light">Pay Here</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default CartScreen
