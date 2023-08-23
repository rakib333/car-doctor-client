import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div id='about' className="hero mb-24">
            <div className="hero-content flex-col md:flex-row">
                <div className='md:w-1/2 relative'>
                    <img src={person} className="w-[460px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-[340px] border-8 border-white absolute top-1/2 right-5 rounded-lg shadow-2xl" alt="" />
                </div>
                <div className='md:w-1/2 space-y-7'>
                    <h2 className='text-amber-500 text-3xl font-bold'>About us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <button className="btn btn-primary">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;