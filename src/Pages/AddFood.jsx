import { useState } from "react";
import addImg from "../assets/add_icon_green.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async ({ foodData }) => {
      const { data } = await axiosSecure.post("/addFood", foodData);
      console.log(data);
    },
    onSuccess: () => {
      toast.success("Food added successfully");
      navigate("/myFood");
    },
  });

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const foodImg = form.photo.value;
    const foodQuantity = form.quantity.value;
    const pickupLocation = form.location.value;
    const expiredDate = startDate;
    const notes = form.notes.value;
    const status = "available";
    const foodData = {
      foodName,
      foodImg,
      foodQuantity,
      pickupLocation,
      expiredDate,
      notes,
      donor: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
      status,
    };
    console.log(foodData);
    await mutateAsync({ foodData });
  };

  return (
    <div className="my-20">
      <Helmet>
        <title>CareKitchen || Add Food</title>
      </Helmet>
      <section className="max-w-5xl p-6 mx-auto bg-white rounded-md shadow-md">
        <div className="flex justify-center items-center space-x-3 mb-9">
          <img src={addImg} alt="Add Food Icon" className="w-12 h-12" />
          <h2 className="text-2xl text-center font-semibold text-gray-700 capitalize">
            Add Food
          </h2>
        </div>

        <form onSubmit={handleAddFood}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700">Food Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter food name"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Food Image URL</label>
              <input
                id="image"
                type="url"
                name="photo"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Food Quantity</label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter quantity"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Pickup Location</label>
              <input
                id="location"
                type="text"
                name="location"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter pickup location"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Expiry Date/Time</label>
              <DatePicker
                className="border p-2 rounded-md w-full text-gray-700"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>

            <div>
              <label className="text-gray-700">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter any additional notes"
                rows="4"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-3 text-white bg-[#ff6347] rounded-md hover:bg-orange-600 transition-colors w-full sm:w-auto"
            >
              Add Food
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddFood;
