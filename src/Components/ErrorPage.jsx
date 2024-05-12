import Lottie from "lottie-react";
import error from "../assets/lottieError.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Lottie className="h-[600px]" animationData={error}></Lottie>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="text-center bg-[#ff6347] text-white px-4 py-2 rounded-md">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
