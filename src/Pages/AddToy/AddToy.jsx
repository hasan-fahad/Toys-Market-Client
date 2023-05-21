import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provides/AuthProvider";
import AddToyRow from "./AddToyRow";


const AddToy = () => {

    

    const {user} = useContext(AuthContext);
    const [addToy, setAddToy]= useState([]);
    const url =`http://localhost:5000/order?email=${user.email}`;

    useEffect (()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=> setAddToy(data))
    }, [])
    return (
      <div>
        <h2>My Toy</h2>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {
            addToy.map(booking => <AddToyRow 
            key={booking._id}
            booking={booking}
            ></AddToyRow>)
        }
    </tbody>
  </table>
</div>
      </div>
    );
};

export default AddToy;