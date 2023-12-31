
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provides/AuthProvider';


const NavBar = () => {

    const {user , logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    const navItems = <>
        
        <li className="btn btn-outline rounded-md btn-success mx-3 my-2"><Link to='/'>Home</Link></li>
        <li className="btn btn-outline rounded-md btn-success mx-3 my-2"><Link to='/allproducts'>All Toys</Link></li>
        
        <li className="btn btn-outline rounded-md btn-success mx-3 my-2"><Link to='/blogs'>Blogs</Link></li>
        <li className="btn btn-outline rounded-md btn-success mx-3 my-2"><Link to='/about'>About Us</Link></li>
    </>

    const userProfile = <>
    
         <div>
                {user?.email?<>
                    <li className="btn btn-outline rounded-md btn-success mx-3 my-2"><Link to="/allproducts">Add A Toy</Link></li>
                    <li className="btn btn-outline rounded-md btn-success mx-3 my-2"><Link to="/addtoy">My Toy</Link></li>
                    <button className="btn btn-outline rounded-md btn-success mx-3 my-2" onClick={handleLogOut} >Log Out</button>
                </>
                        :
                        <Link to='/login'><button className="btn btn-outline rounded-md btn-success mx-3 my-2">Login</button></Link>
                    }
                </div>
        
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="bg-slate-900 rounded-xl w-36">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   {/* <button className="btn btn-outline btn-primary"><Link to="/login">Log in</Link></button>  */}
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {user && <label tabIndex={0} style={{fontSize:35}}>
                    {/* <div className="w-10 rounded-full">
                        <FaUserCircle/>
                    </div> */}
                    <img src={user.photoURL} alt="" className='w-12 h-12 mr-4 rounded-full' />
                </label>}
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {userProfile}
      </ul>
    </div>
  </div>
  </div>
</div>
    );
};

export default NavBar;