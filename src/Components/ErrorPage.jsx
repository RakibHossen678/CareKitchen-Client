import Lottie from 'lottie-react';
import error from '../assets/lottieError.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Link to='/' >
            <Lottie className='h-[800px]' animationData={error}></Lottie>
        </Link>
    );
};

export default ErrorPage;