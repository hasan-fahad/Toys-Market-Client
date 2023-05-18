
import about from '../../assets/Images/about.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='rounded-lg' src={about} />
    <div>
        <h2 className="text-3xl font-bold text-orange-600 my-5" >About Us</h2>
      <h1 className="text-5xl font-bold">Kiddo Baby Shop!</h1>
      <p className="py-6"> This baby store sells clothing, furniture, toys, food, and accessories geared toward young children and their family. </p>
      
    </div>
  </div>
</div>
    );
};

export default About;