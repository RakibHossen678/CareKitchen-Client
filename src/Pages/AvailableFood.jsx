import { useState } from "react";
import { motion } from "framer-motion";
import Feature from "../Components/Feature";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const AvailableFood = () => {
  const axiosSecure = useAxiosSecure();
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

  return (
    <div className="my-20">
      <Helmet>
        <title>CareKitchen || Available Food</title>
      </Helmet>

      <div className="flex justify-center lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0">
        {/* Layout Switch Button */}
        <button
          onClick={() => setLayout(!layout)}
          className="p-4 w-full lg:w-auto bg-[#ff6347] text-white rounded-full shadow-lg hover:bg-[#e55a3d] transition-colors duration-300"
        >
          {layout ? "Switch to 3-Column Layout" : "Switch to 2-Column Layout"}
        </button>

        {/* Sorting Dropdown */}
        <div className="w-full lg:w-auto">
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            name="sort"
            id="sort"
            className="w-full p-4 rounded-full shadow-lg bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6347] focus:border-transparent appearance-none transition-all duration-300 ease-in-out"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22gray%22%3E%3Cpath fill-rule=%22evenodd%22 d=%22M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z%22 clip-rule=%22evenodd%22/%3E%3C/svg%3E')",
              backgroundPosition: "right 1rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.25rem",
              paddingRight: "2.5rem",
            }}
          >
            <option value="">Sort By Food Expiry Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full lg:w-auto">
          <div className="flex p-1 overflow-hidden border rounded-full shadow-sm">
            <input
              className="px-6 py-2 w-full outline-none rounded-l-full"
              type="text"
              name="search"
              placeholder="Enter Food Name"
              aria-label="Enter Food Name"
            />
            <button
              type="submit"
              className="px-4 py-3 text-sm font-medium tracking-wider text-white uppercase bg-[#ff6347] rounded-full shadow-lg hover:bg-[#e55a3d] transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 50,
          ease: "easeInOut",
          duration: 0.8,
        }}
        className="max-w-xl mx-auto text-center my-9"
      >
        <h1 className="text-5xl font-semibold my-3">Available Foods</h1>
        <p className="py-3 text-gray-600">
          Indulge in a delightful array of culinary delights crafted to
          tantalize your taste buds. From savory snacks to mouthwatering mains,
          we have curated a selection that caters to every palate. Dive into our
          offerings and treat yourself to a gastronomic journey like no other.
        </p>
      </motion.div>

      {/* Food Grid */}
      {foods.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-4">
            No foods available right now
          </h2>
          <p className="text-gray-600">
            Check back later or explore other sections!
          </p>
        </div>
      ) : (
        <div
          className={`grid gap-6 my-10 ${
            layout
              ? "md:grid-cols-2 lg:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {foods
            .filter((food) => food.status === "available")
            .map((food) => (
              <Feature key={food._id} food={food} />
            ))}
        </div>
      )}
    </div>
  );
};

export default AvailableFood;
