import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provides/AuthProvider";


const MyToy = () => {

    const toy = useLoaderData();
    const {Name, _id, Price} = toy;
    const {user} =useContext(AuthContext);
    const handleToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const dueAmount = form.dueAmount.value;
        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            dueAmount,
            Price
        }
        console.log(order);

        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.insertedId) {
            alert('Toy order success')
            }
        })
    }
    return (
        <div>
        <h2 className="text-center text-4xl font-bold text-cyan-500">ADD A TOY: {Name}</h2>
        <form onSubmit={handleToy} >
        <div className="container mx-auto mt-8">
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-blue-500 p-4 rounded-lg">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
        </div>
      </div>
      <div className="bg-red-500 p-4 rounded-lg">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" />
        </div>
      </div>
      <div className="bg-green-500 p-4 rounded-lg">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
      </div>
      <div className="bg-yellow-500 p-4 rounded-lg">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" name="dueAmount" defaultValue={'Tk. '+ Price} className="input input-bordered" />
        </div>
      </div>
    </div>
  </div>
  <div className="form-control mt-6 my-5">

          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
        </form>
        
        
</div>
    );
};

export default MyToy;