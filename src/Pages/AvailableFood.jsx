import { useEffect, useState } from "react";

import Feature from "../Components/Feature";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const AvailableFood = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState(false);
 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/availableFood?sort=${sort}&search=${search}`
      );
      setFoods(data);
    };
    getData();
  }, [sort, search,axiosSecure]);
    console.log(sort);
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };
  console.log(search);

  return (
    <div className="my-20">
      <div className="flex justify-center space-x-4">
        <div>
          <button
            onClick={() => setLayout(!layout)}
            className="p-4 bg-[#ff6347] text-white rounded-full"
          >
            Change Layout
          </button>
        </div>
        <div>
          <select
            onChange={(e) => {
              setSort(e.target.value);
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
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-full    ">
            <input
              className="px-6 py-2  outline-none "
              type="text"
              name="search"
              placeholder="Enter Food Name"
              aria-label="Enter Food Name"
            />

            <button
              type="submit"
              className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#ff6347] rounded-full "
            >
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
      <div
        className={`grid  md:grid-cols-2 grid-cols-1 gap-6 my-10 ${
          layout ? "lg:grid-cols-2 mx-auto justify-center" : "lg:grid-cols-3"
        }`}
      >
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
