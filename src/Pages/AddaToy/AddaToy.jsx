import { useLoaderData } from "react-router-dom";

const AddaToy = () => {

    const toy = useLoaderData();
    const {Name, _id} = toy;

    return (
        <div>
            <h2>add A toy {Name}</h2>
            
            <form>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
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
          
        </div>
        <div className="form-control">
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
          
        </div>
        <div className="form-control mt-6">
         
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
      </div>
    </div>
  </div>
  </div>
         </div>
            </form>
</div>
        
    );
};

export default AddaToy;