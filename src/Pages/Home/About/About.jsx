import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-8 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" /> <br />
                    <img src={parts} className="w-[350px] rounded-lg shadow-2xl absolute left-1/3 top-[150px] border-white border-[12px]" />
                </div>
                <div className='lg:w-1/2 p-4 space-y-4'>
                    <h2 className='text-warning font-semibold text-2xl'>About us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;