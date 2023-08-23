
import Header from '../pages/SharedPages/Header/Header';
import Register from '../pages/Register/Register';

const RegisterLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[1140px] mx-auto'>
                <Register></Register>
            </div>
        </div>
    );
};

export default RegisterLayout;