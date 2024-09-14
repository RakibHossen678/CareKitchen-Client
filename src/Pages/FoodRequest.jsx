import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const FoodRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: foods = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["food-request"],
  });

  const getData = async () => {
    const { data } = await axiosSecure(`/request/${user?.email}`);
    return data;
  };

  return (
    <div className="my-10 max-w-6xl mx-auto">
      <Helmet>
        <title>CareKitchen || Requested Food</title>
      </Helmet>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Requested Foods
        </h2>
        <Link
          to="/availableFood"
          className="px-4 py-2 bg-[#ff6347] text-white rounded-md hover:bg-[#e55a3d] transition-colors"
        >
          Explore Available Foods
        </Link>
      </div>

      {foods.length === 0 ? (
        <div className="text-center my-20">
          <h3 className="text-xl font-medium text-gray-600 mb-6">
            You haven't requested any food yet.
          </h3>
          <Link
            to="/availableFood"
            className="px-6 py-3 bg-[#ff6347] text-white rounded-md hover:bg-[#e55a3d] transition-colors"
          >
            Request Food Now
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Food Image</th>
                <th className="px-4 py-2">Food Name</th>
                <th className="px-4 py-2">Donor Name</th>
                <th className="px-4 py-2">Donor Email</th>
                <th className="px-4 py-2">Pickup Location</th>
                <th className="px-4 py-2">Expiry Date</th>
                <th className="px-4 py-2">Request Date</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, idx) => (
                <tr
                  key={food._id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">
                    <div className="w-12 h-12">
                      <img
                        src={food.foodImg}
                        alt={food.foodName}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">{food.foodName}</td>
                  <td className="px-4 py-2">{food.donor.name}</td>
                  <td className="px-4 py-2">{food.donor.email}</td>
                  <td className="px-4 py-2">{food.pickupLocation}</td>
                  <td className="px-4 py-2">
                    {new Date(food.expiredDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(food.reqDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FoodRequest;
