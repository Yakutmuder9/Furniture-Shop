import './login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center login'>
      <div className='loginLeft ps-5 d-none d-lg-flex align-items-center'>
        <div className='text-light text-center'><h1 className='text-light'><span class="material-symbols-outlined text-light">
          military_tech
        </span> Go Furniture</h1><h2 className='text-light'><span class="material-symbols-outlined text-light">
          verified
        </span> Fortune</h2><h4 className='text-light'><span class="material-symbols-outlined text-light">
          verified
        </span> Simple</h4>
          <h6 className='text-light '><span class="material-symbols-outlined text-light">
            verified
          </span> Elegant</h6>
        </div>

      </div>
      <div className='loginRight p-5'>
        <div className=''>
          <div className='w-100 h-100 '>

            <h1 className='px-5'>Login</h1>
            <div className='px-5'>
              <input placeholder='enter email here' className='bg-transparent w-100 px-4 py-2 outline-none my-3 me-5' type="email" />
            </div>
            <div className='px-5'>
              <input placeholder='enter password here' className='bg-transparent w-100 px-4 py-2 outline-none my-3 me-5' type="password" />
            </div>
            <div className='px-5'>
              <button className='btn w-100 me-5 text-light' style={{background: "#301f01"}}>Login</button>
              <div className='mt-2'>Don't have account?
                <Link className='text-primary text-decoration-none mt-3' to='/signup'> SignUp here</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
