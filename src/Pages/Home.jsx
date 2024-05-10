import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";

const Home = () => {
  const foods = useLoaderData();
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
          {foods.slice(0, 6).map((food) => (
            <Feature key={food._id} food={food}></Feature>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
