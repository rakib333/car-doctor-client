
import Header from '../pages/SharedPages/Header/Header';
import Login from '../pages/Login/Login';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[1140px] mx-auto'>
                <Login></Login>
            </div>
        </div>
    );
};

export default LoginLayout;