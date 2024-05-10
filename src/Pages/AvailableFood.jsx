import axios from "axios";
import { useEffect, useState } from "react";

import Feature from "../Components/Feature";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [sort,setSort]=useState('')
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`http://localhost:5000/availableFood?sort=${sort}`);
      setFoods(data);
    };
    getData();
  }, [sort]);
  console.log(sort);
  return (
    <div className="my-20">
      <div className="flex justify-center space-x-4">
        <div>
          <select
          onChange={e=>{
            setSort(e.target.value)
          }}
          value={sort}
            name="sort"
            id="sort"
            className="border p-4 rounded-full"
          >
            <option value="">Sort By Food Expire Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <form>
          <div className="flex p-1 overflow-hidden border rounded-full   focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Food Name"
              aria-label="Enter Food Name"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#ff6347] rounded-full ">
              Search
            </button>
          </div>
        </form>
      </div>
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
