import { useState } from "react";
import { motion } from "framer-motion";
import Feature from "../Components/Feature";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const AvailableFood = () => {
  const axiosSecure = useAxiosSecure();
  // const [foods, setFoods] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState(false);
  const { data: foods = [], refetch } = useQuery({
    queryFn: () => getData(),
    queryKey: ["available", sort, search],
  });
  const getData = async () => {
    const { data } = await axiosSecure(
      `/availableFood?sort=${sort}&search=${search}`
    );
    refetch();
    return data;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };
  console.log(search);

  return (
    <div className="my-20">
      <Helmet>
        <title>CareKitchen || Available Food</title>
      </Helmet>
      <div className="flex justify-center lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0">
        <div>
          <button
            onClick={() => setLayout(!layout)}
            className="p-4 w-full bg-[#ff6347] text-white rounded-full"
          >
            Change Layout
          </button>
        </div>
        <div className="">
          <select
            onChange={(e) => {
              setSort(e.target.value);
            }}
            value={sort}
            name="sort"
            id="sort"
            className="border w-full p-4 rounded-full"
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
              className="px-1 w-full md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#ff6347] rounded-full "
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: -10, opacity: 1 }}
        transition={{
          delay: 0.2,
          X: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="max-w-xl mx-auto text-center my-9"
      >
        <h1 className="text-5xl font-semibold my-3">Available Foods</h1>
        <p className="py-3">
          Indulge in a delightful array of culinary delights crafted to
          tantalize your taste buds. From savory snacks to mouthwatering mains,
          we have curated a selection that caters to every palate. Dive into our
          offerings and treat yourself to a gastronomic journey like no other.
        </p>
      </motion.div>
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
