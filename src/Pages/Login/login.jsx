
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/Images/about.jpg'
import { AuthContext, auth } from '../Provides/AuthProvider';
import { useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const{logIn,provider,githubProvider} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password});

    logIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.log(error))
}
const handleGoogleLogin = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
        const loggedInUser = result.user;
        navigate(from, {replace: true})
    })
    .catch(error =>console.log('error', error.message))
}
const handleGithubLogin = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
        const githubUser = result.user;
        navigate(from, {replace: true})
    })
    .catch(error => console.log('error', error.message))
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
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login"/>
        </div>
        </form>
        <p className="mx-auto label-text-alt mx-1">New to Kiddo Baby Shop <Link className="text-purple-700 font-bold" to ="/signup">Sign Up</Link></p>
        <h3 className='mx-auto label-text-alt'>Register with another account</h3>
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-info btn-block "><small className='text-2xl text-teal-950 mr-2'><FaGoogle/></small> Login With Google</button>
                            
                            <button onClick={handleGithubLogin} className="btn btn-outline btn-accent  btn-block"><small className='mr-2 text-2xl text-blue-800'><FaGithub/></small> Login With Github</button>
      </div>
    </div>
  </div>
  
                        
</div>
    );
};

export default Login;