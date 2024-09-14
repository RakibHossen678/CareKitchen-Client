import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const MyFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: foods = [], refetch } = useQuery({
    queryFn: () => getData(),
    queryKey: ["myFoods"],
  });

  const getData = async () => {
    const { data } = await axiosSecure(`/myFood/${user?.email}`);
    return data;
  };

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id }) => {
      const { data } = await axiosSecure.delete(`/myFood/${id}`);
      console.log(data);
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your food has been deleted.",
        icon: "success",
      });
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff6347",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync({ id });
        refetch();
      }
    });
  };

  return (
    <div className="my-10 max-w-6xl mx-auto">
      <Helmet>
        <title>CareKitchen || Manage Food</title>
      </Helmet>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">My Foods</h2>
        <Link
          to="/addFood"
          className="px-4 py-2 bg-[#ff6347] text-white rounded-md hover:bg-[#e55a3d] transition-colors"
        >
          Add New Food
        </Link>
      </div>

      {foods.length === 0 ? (
        <div className="text-center my-20">
          <h3 className="text-xl font-medium text-gray-600 mb-6">
            You haven't added any food yet.
          </h3>
          <Link
            to="/addFood"
            className="px-6 py-3 bg-[#ff6347] text-white rounded-md hover:bg-[#e55a3d] transition-colors"
          >
            Add Your First Food
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
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Pickup Location</th>
                <th className="px-4 py-2">Expiry Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
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
                  <td className="px-4 py-2">{food.foodQuantity} servings</td>
                  <td className="px-4 py-2">{food.pickupLocation}</td>
                  <td className="px-4 py-2">
                    {new Date(food.expiredDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 capitalize">{food.status}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <MdDelete className="text-2xl" />
                    </button>
                    <Link to={`/updateFood/${food._id}`}>
                      <FaEdit className="text-2xl text-orange-500 hover:text-orange-600 transition-colors" />
                    </Link>
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

export default MyFood;
