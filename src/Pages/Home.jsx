import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Lottie from "lottie-react";
import waitImg from '../assets/loading (1).json'

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const { data: foods=[],isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ["Features"],
  });
  const getData = async () => {
    const { data } = await axiosSecure(`/food`);
    return data;
  };
  if(isLoading){
    return <Lottie className="w-24" animationData={waitImg}></Lottie>
  }

  console.log(foods);
  return (
    <div>
      <Banner></Banner>
      <div className="my-20">
        <div className="max-w-xl mx-auto text-center my-9">
          <h1 className="text-5xl font-semibold my-3">Featured Foods</h1>
          <p className="py-3">
            Explore our curated selection of Featured Foods, meticulously
            crafted to tantalize your taste buds and ignite your culinary
            imagination. From gourmet delights to exotic flavors, each dish
            promises a journey of sensory delight.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {foods.slice(0,6).map((food) => (
            <Feature key={food._id} food={food}></Feature>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link to="/availableFood">
            <button className="  bg-[#ff6347] items-center text-white rounded-lg p-2 space-x-1.5">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
