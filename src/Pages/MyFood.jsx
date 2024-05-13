import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const MyFood = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axios(
      `http://localhost:5000/myFood/${user?.email}`,
      { withCredentials: true }
    );
    setFoods(data);
  };
  console.log(foods);
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
        const { data } = await axios.delete(
          `http://localhost:5000/myFood/${id}`
        );
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Food has been deleted.",
            icon: "success",
          });
          getData();
        }
      }
    });
  };
  return (
    <div className="my-10">
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Food Quantity</th>
              <th>Pickup location</th>
              <th>Expired Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, idx) => (
              <tr key={food._id}>
                <th>{idx + 1}</th>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={food.foodImg} />
                    </div>
                  </div>
                </td>
                <td>{food.foodName}</td>
                <td>{food.foodQuantity} servings</td>
                <td>{food.pickupLocation}</td>
                <td>{new Date(food.expiredDate).toLocaleDateString()}</td>
                <td>{food.status}</td>
                <td className="flex">
                  <button onClick={() => handleDelete(food._id)}>
                    <MdDelete className="text-xl  text-[#ff6347]" />
                  </button>
                  <Link to={`/updateFood/${food._id}`}>
                    <FaEdit className="text-lg ml-2 text-[#ff6347]" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFood;
