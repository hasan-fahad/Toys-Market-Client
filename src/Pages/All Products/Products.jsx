

const Products = ({product}) => {

    const{ Name, img, Rating, Description, Price, Subcategory } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Name}</h2>
    <p>Price: {Price} tk</p>
    <p>Rating: {Rating}</p>
    <p>Subcategory: {Subcategory}</p>
    <p>Description: {Description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Products;