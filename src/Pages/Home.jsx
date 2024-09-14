import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Lottie from "lottie-react";
import waitImg from "../assets/loading (1).json";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Volunteer from "../Components/Volunteer";
import Inspire from "../Components/Inspire";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  
  const getData = async () => {
    const { data } = await axiosSecure(`/food`);
    return data;
  };
  
  const { data: foods = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ["Features"],
  });

  // Loading state animation
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-screen"
      >
        <Lottie className="w-24" animationData={waitImg}></Lottie>
      </motion.div>
    );
  }

  return (
    <div className="">
      <Helmet>
        <title>CareKitchen || Home</title>
      </Helmet>
      <Banner></Banner>

      <div className="my-20">
        {/* Featured Foods Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          className="max-w-xl mx-auto text-center my-9"
        >
          <h1 className="text-5xl font-bold my-4">Featured Foods</h1>
          <p className="py-3 text-lg text-gray-600">
            Explore our curated selection of Featured Foods, meticulously
            crafted to tantalize your taste buds and ignite your culinary
            imagination. From gourmet delights to exotic flavors, each dish
            promises a journey of sensory delight.
          </p>
        </motion.div>

        {/* Grid of Featured Foods */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-4 lg:px-0"
        >
          {foods.slice(0, 6).map((food) => (
            <Feature key={food._id} food={food}></Feature>
          ))}
        </motion.div>

        {/* Show All Button */}
        <div className="flex justify-center items-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link to="/availableFood">
              <button className="bg-[#ff6347] hover:bg-[#e5583d] text-white rounded-lg px-6 py-3 shadow-lg transition-all">
                Show All
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Volunteer Section */}
      <Volunteer></Volunteer>

      {/* Inspire Section */}
      <Inspire></Inspire>
    </div>
  );
};

export default Home;
