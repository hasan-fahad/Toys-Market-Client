
import img1 from '../../assets/Images/banner1.jpg'
import img2 from '../../assets/Images/banner2.jpg'
import img3 from '../../assets/Images/banner3.jpg.webp'
const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg h-[400px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-outline btn-primary btn-circle mx-3">❮</a> 
      <a href="#slide2" className="btn btn-outline btn-primary btn-circle mx-3">❯</a>
    </div>
    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
      <h1 className='text-black text-6xl font-bold'>Make Your Children Happy <br /> By Buying Toys</h1>
      </div>
      </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-outline btn-primary btn-circle mx-3">❮</a> 
      <a href="#slide3" className="btn btn-outline btn-primary btn-circle mx-3">❯</a>
    </div>
    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
      <h1 className='text-black text-6xl font-bold'>Make Your Children Happy <br /> By Buying Toys</h1>
      </div>
      </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-outline btn-primary btn-circle mx-3">❮</a> 
      <a href="#slide3" className="btn btn-outline btn-primary btn-circle mx-3">❯</a>
    </div>
    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
      <h1 className='text-black text-6xl font-bold'>Make Your Children Happy <br /> By Buying Toys</h1>
      </div>
      </div>
  </div> 
</div>
    );
};

export default Banner;