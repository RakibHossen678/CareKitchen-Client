import axios from "axios";
import { useEffect, useState } from "react";

import Feature from "../Components/Feature";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/availableFood");
      setFoods(data);
    };
    getData();
  }, []);
  console.log(foods);
  return (
    <div className="my-20">
      <div className="max-w-xl mx-auto text-center my-9">
        <h1 className="text-5xl font-semibold my-3">Available Foods</h1>
        <p className="py-3">
          Indulge in a delightful array of culinary delights crafted to
          tantalize your taste buds. From savory snacks to mouthwatering mains,
          we've curated a selection that caters to every palate. Dive into our
          offerings and treat yourself to a gastronomic journey like no other.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        {foods
          .filter((food) => food.status === "available")
          .map((food) => (
            <Feature key={food._id} food={food}></Feature>
          ))}
      </div>
    </div>
  );
};

export default AvailableFood;
