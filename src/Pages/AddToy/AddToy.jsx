import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provides/AuthProvider";
import AddToyRow from "./AddToyRow";


const AddToy = () => {

    

    const {user} = useContext(AuthContext);
    const [addToy, setAddToy]= useState([]);
    const url =`https://toys-market-server-hasan-fahad.vercel.app/order?email=${user.email}`;

    useEffect (()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=> setAddToy(data))
    }, [])
    const handleDelete = id => {
        const proceed = confirm('Do you want to delete this');
        if (proceed){
                fetch(`https://toys-market-server-hasan-fahad.vercel.app/order/${id}`,
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },

                }
                )
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        alert('Deleted Done!')
                        const remaining = addToy.filter(booking => booking._id !== id);
                        setAddToy(remaining);
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`https://toys-market-server-hasan-fahad.vercel.app/order/${id}`)
        .then (res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.modification>0)
            {
                alert('Order updated');
            }
        })

    }
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
            handleDelete= {handleDelete}
            handleConfirm={handleConfirm}
            ></AddToyRow>)
        }
    </tbody>
  </table>
</div>
      </div>
    );
};

export default AddToy;