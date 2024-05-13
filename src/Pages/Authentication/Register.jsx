import logo from "../../assets/Logo (2).png";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/login.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
const Register = () => {
  const { createUser, updateUserProfile, user, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;
    console.log({ email, pass, name, photo });
    try {
      const result = await createUser(email, pass);
      console.log(result);
      await updateUserProfile(name, photo);
      setUser({ ...result?.user, photoURL: photo, displayName: name });
      const { data } = await axios.post(
        "http://localhost:5000/jwt",
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      navigate("/");
      toast.success("User created successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div className="my-10">
      <div className="flex items-center w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div className="hidden  bg-cover lg:block lg:w-1/2">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>

        <div className="w-full px-6 py-4 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-20 " src={logo} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          <div className="flex items-center justify-between mt-4"></div>
          <form onSubmit={handleSubmitForm}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>
              <input
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  PhotoURL
                </label>
              </div>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="photo"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff6347] rounded-lg hover:bg-[#de2d0d] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
