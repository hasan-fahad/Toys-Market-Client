import React from 'react';

const AddToyRow = ({booking}) => {

    const {_id,customerName, email, date, Price } = booking;

    const handleDelete = id => {
        const proceed = confirm('Do you want to delete this');
        if (proceed){
                fetch(``)
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <tr className="hover">
        <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-square btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>{customerName}</td>
        <td>{email}</td>
        <td>{date}</td>

        <td>{Price}</td>
      </tr>
    );
};

export default AddToyRow;