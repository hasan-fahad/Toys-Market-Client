
import { Link } from 'react-router-dom';
import img from '../../assets/Images/about.jpg'

const Login = () => {

const handleLogin = event => {
    event.preventDefault();

}
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-1/2">
      <img src={img} alt="" className="rounded-3xl" />
      <p className="py-6 font-semibold justify-center flex">Please LogIn for buy anythings.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
        <h1 className="text-5xl font-bold my-3">Login now!</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login"/>
        </div>
        </form>
        <p className="label-text-alt mx-1">New to Kiddo Baby Shop <Link className="text-purple-700 font-bold" to ="/signup">Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;