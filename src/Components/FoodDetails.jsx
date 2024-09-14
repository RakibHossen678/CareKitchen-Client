import { MdNote } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const FoodDetails = () => {
  const food = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [note, setNotes] = useState("");
  const {
    _id,
    donor,
    foodImg,
    foodName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    notes,
  } = food;

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async ({ _id, foodData }) => {
      const { data } = await axiosSecure.put(`/food/${_id}`, foodData);
      return data;
    },
    onSuccess: () => {
      toast.success("Request successfully added");
    },
    onError: () => {
      toast.error("Failed to add request");
    },
  });

  const handleRequest = async (e) => {
    e.preventDefault();
    const status = "requested";
    const foodData = {
      foodName: food.foodName,
      foodImg: food.foodImg,
      foodId: food._id,
      userEmail: user.email,
      userName: user.displayName,
      reqDate: new Date().toLocaleDateString(),
      foodQuantity: food.foodQuantity,
      pickupLocation: food.pickupLocation,
      expiredDate: new Date(expiredDate).toLocaleDateString(),
      notes: note || food.notes,
      donor: {
        name: food.donor.name,
        email: food.donor.email,
      },
      status,
    };
    await mutateAsync({ _id, foodData });
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center my-20 gap-10">
      <Helmet>
        <title>CareKitchen || Food Details</title>
      </Helmet>
      <div className="w-full max-w-lg">
        <motion.img
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            opacity: { duration: 1 },
          }}
          className="w-full h-[400px] object-cover"
          src={foodImg}
          alt={foodName}
          loading="lazy"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
        }}
        className="max-w-lg"
      >
        <div className="flex space-x-2 py-3">
          <img
            className="w-14 h-14 rounded-lg object-cover"
            src={donor?.image || "https://via.placeholder.com/150"}
            alt={donor?.name}
          />
          <div>
            <h1 className="font-semibold text-lg">{donor?.name}</h1>
            <h1 className="text-sm text-gray-500">{donor?.email}</h1>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">{foodName}</h2>
          <div className="py-2 space-y-3">
            <p>
              <span className="font-semibold">Expire Date:</span>{" "}
              {new Date(expiredDate).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span> {foodQuantity}{" "}
              servings
            </p>
            <p>
              <span className="font-semibold">Pickup Location:</span>{" "}
              {pickupLocation}
            </p>
            <p className="flex items-center">
              <span className="text-2xl pr-3 py-2">
                <MdNote />
              </span>
              {notes}
            </p>
          </div>
        </div>
        <button
          className="btn bg-[#ff6347] text-white hover:bg-[#e5534f] rounded-lg py-2 px-4"
          onClick={() => document.getElementById("request-modal").showModal()}
        >
          Request
        </button>
        <dialog
          id="request-modal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h2 className="text-lg font-semibold mb-4">Request Details</h2>
            <form onSubmit={handleRequest}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700">Food Name</label>
                  <input
                    defaultValue={foodName}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Food Image</label>
                  <input
                    defaultValue={foodImg}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Food Id</label>
                  <input
                    defaultValue={_id}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Donor Name</label>
                  <input
                    defaultValue={donor?.name}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Donor Email</label>
                  <input
                    defaultValue={donor?.email}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Your Email</label>
                  <input
                    defaultValue={user?.email}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Pickup Location</label>
                  <input
                    defaultValue={pickupLocation}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Expired Date/Time</label>
                  <input
                    defaultValue={new Date(expiredDate).toLocaleDateString()}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Request Date</label>
                  <input
                    defaultValue={new Date().toLocaleDateString()}
                    readOnly
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Additional Notes</label>
                  <input
                    value={note}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className={`px-8 py-2.5 text-white bg-[#ff6347] rounded-md ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Request"}
                </button>
              </div>
            </form>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => document.getElementById("request-modal").close()}
          ></div>
        </dialog>
      </motion.div>
    </div>
  );
};

export default FoodDetails;
