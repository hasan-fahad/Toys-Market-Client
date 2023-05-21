import { Link } from "react-router-dom";


const Products = ({product}) => {

    const{ _id, Name, img, Rating, Description, Price, Subcategory } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Name}</h2>
    <p className="text-xl text-green-600">Price: {Price} tk</p>
    <p className="text-red-600">Rating: {Rating}</p>
    <p className="text-blue-600">Subcategory: {Subcategory}</p>
    <p><span className="font-semibold">Description:</span> {Description}</p>
    <div className="card-actions">
      <Link to={`/mytoy/${_id}`}>
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Products;