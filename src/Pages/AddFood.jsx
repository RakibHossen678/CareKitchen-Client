import { useState } from "react";
import addImg from "../assets/add_icon_green.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useAuth();
  const navigate = useNavigate();

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

    try {
      const { data } = await axios.post(
        "http://localhost:5000/addFood",
        foodData
      );
      console.log(data);
      toast.success("Food added Successfully");
      navigate("/myFood");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="my-20">
      <section className="max-w-5xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-4">
        <div className="flex justify-center items-center space-x-3 mb-9">
          <img src={addImg} alt="" />
          <h2 className="text-2xl text-center font-semibold text-gray-700 capitalize dark:text-white">
            Add Food
          </h2>
        </div>

        <form onSubmit={handleAddFood}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Food Name
              </label>
              <input
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
                id="image"
                type="text"
                name="photo"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Food Quantity
              </label>
              <input
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
                id="location"
                type="text"
                name="location"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 dark:text-gray-200">
                Expired Date/Time
              </label>
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Additional Notes
              </label>
              <input
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
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#ff6347] rounded-md  w-full"
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
