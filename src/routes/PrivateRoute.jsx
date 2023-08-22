import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = 'rakib';
    const loading = 'true';

    if (loading) {
        return <div>Loading....</div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;