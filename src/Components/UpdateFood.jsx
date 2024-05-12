import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateFood = () => {
  const food = useLoaderData();
  const navigate=useNavigate()
  const [startDate, setStartDate] = useState(new Date(food.expiredDate));
  console.log(food);
  const { _id,foodName, foodImg, foodQuantity, pickupLocation, notes } = food;
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const foodImg = form.photo.value;
    const foodQuantity = form.quantity.value;
    const pickupLocation = form.location.value;
    const expiredDate = startDate;
    const notes = form.notes.value;
    const foodData = {
      foodName,
      foodImg,
      foodQuantity,
      pickupLocation,
      expiredDate,
      notes,
    };
    console.log(foodData);
    const { data } =await axios.put(
      `http://localhost:5000/update/${_id}`,foodData
    );
    console.log(data)
    toast.success('Updated successfully')
    navigate('/myFood')
  };
  return (
    <div className="lg:w-9/12 mx-auto">
      <div className="py-3">
        <h1 className="text-center text-4xl font-semibold">Update Food</h1>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Food Name
            </label>
            <input
              defaultValue={foodName}
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
              defaultValue={foodImg}
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
              defaultValue={foodQuantity}
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
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#ff6347] rounded-md  w-full"
          >
            Update Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
