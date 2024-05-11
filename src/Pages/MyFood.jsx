import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axios(`http://localhost:5000/myFood/${user?.email}`);
    setFoods(data);
  };
  console.log(foods);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
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
                <td>
                  <button>
                    <MdDelete className="text-xl  text-[#ff6347]" />
                  </button>
                  <button>
                    <FaEdit className="text-lg ml-2 text-[#ff6347]"/>
                  </button>
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
