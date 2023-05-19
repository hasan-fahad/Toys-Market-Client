
import { Link } from 'react-router-dom';
import img from '../../assets/Images/about.jpg'
import { AuthContext } from '../Provides/AuthProvider';
import { useContext } from 'react';



const SignUp = () => {

    const{createUser, updateUserData} = useContext(AuthContext);
    

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log({name, email,photoURL, password});

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            
            event.target.reset();
            
            updateUserData(result.user, name, photoURL);
        })
        .catch(error=> console.log(error))
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
              <form onSubmit={handleSignUp}>
              <div className="form-control">
              <h1 className="text-5xl font-bold my-3">Sign Up!</h1>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
              
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                    <label className="label">
                            <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Enter your photo" name='photoURL' className="input input-bordered" required/>
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Sign Up"/>
              </div>
              </form>
              <p className="label-text-alt mx-1">Already Have An Account? <Link className="text-purple-700 font-bold" to ="/login">Log In</Link></p>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;