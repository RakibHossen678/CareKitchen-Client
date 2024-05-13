import { MdNote } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion"

import { useState } from "react";

import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food);
  const axiosSecure=useAxiosSecure()
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
  console.log(food);
  const {mutateAsync}= useMutation({
    mutationFn:async({_id,foodData})=>{
      const { data } = await axiosSecure.put(
        `/food/${_id}`,
        foodData
      );
      console.log(data)
    },
    onSuccess:()=>{
      toast.success("Request successfully added");
    }

  })
  const handleRequest = async () => {
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
    console.log(foodData);
    await mutateAsync({_id,foodData})

    // try {
    //   const { data } = await axios.put(
    //     `http://localhost:5000/food/${_id}`,
    //     foodData
    //   );
    //   console.log(data);
    //   toast.success("Request successfully added");
    // } catch (err) {
    //   console.log(err);
    //   toast.error(err.message);
    // }
  };
  return (
    <div className="flex justify-center items-center my-20 gap-10">
      <div className="">
        <motion.img initial={{ opacity: 0, x: -700 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  X: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }} className="w-full h-[400px] " src={foodImg} alt="" />
      </div>
      <motion.div initial={{ opacity: 0, x: 300 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  X: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }} className="">
        <div className="flex space-x-2 py-3">
          <img className="w-14 rounded-lg" src={donor?.image} alt="" />
          <div>
            <h1>{donor?.name}</h1>
            <h1>{donor?.email}</h1>
          </div>
        </div>
        <div>
          <h2 className="mb-1 text-xl font-semibold">{foodName}</h2>

          <div className=" py-2  space-y-3">
            <p className="">
              <span className="font-semibold">Expire Date</span> :
              {new Date(expiredDate).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Quantity</span> : {foodQuantity}{" "}
              servings
            </p>
          </div>
          <p className="py-2">
            <span className="font-semibold">Pickup Location</span> :{" "}
            {pickupLocation}
          </p>
          <p className="flex items-center">
            <span className="text-2xl pr-3 py-2">
              <MdNote />
            </span>
            {notes}
          </p>
        </div>
        <div>
          <button
            className="btn bg-[#ff6347] items-center text-white hover:bg-[#ff6347] rounded-lg py-2 px-4 space-x-1.5"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Request
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="modal-action">
                <form onSubmit={handleRequest} method="dialog">
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Food Name
                      </label>
                      <input
                        defaultValue={foodName}
                        readOnly
                        id="name"
                        type="text"
                        name="name"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Food Image
                      </label>
                      <input
                        value={foodImg}
                        readOnly
                        id="image"
                        type="text"
                        name="photo"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Food Id
                      </label>
                      <input
                        defaultValue={_id}
                        readOnly
                        id="image"
                        type="text"
                        name="photo"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Donor Name
                      </label>
                      <input
                        defaultValue={donor?.name}
                        readOnly
                        id="quantity"
                        type="text"
                        name="quantity"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Donor Email
                      </label>
                      <input
                        defaultValue={donor?.email}
                        readOnly
                        id="quantity"
                        type="text"
                        name="quantity"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Email
                      </label>
                      <input
                        defaultValue={user?.email}
                        readOnly
                        id="quantity"
                        type="text"
                        name="quantity"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Pickup Location
                      </label>
                      <input
                        defaultValue={pickupLocation}
                        readOnly
                        id="location"
                        type="text"
                        name="location"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Expired Date/Time
                      </label>
                      <input
                        defaultValue={new Date(
                          expiredDate
                        ).toLocaleDateString()}
                        readOnly
                        id="location"
                        type="text"
                        name="location"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-200">
                        Request Date
                      </label>
                      <input
                        defaultValue={new Date().toLocaleDateString()}
                        readOnly
                        id="notes"
                        type="text"
                        name="notes"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div onChange={(e) => setNotes(e.target.value)}>
                      <label className="text-gray-700 dark:text-gray-200">
                        Additional Notes
                      </label>
                      <input
                        defaultValue={notes}
                        id="notes"
                        type="text"
                        name="notes"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      type="submit"
                      className=" px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#ff6347] rounded-md  w-full"
                    >
                      Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </motion.div>
    </div>
  );
};

export default FoodDetails;
