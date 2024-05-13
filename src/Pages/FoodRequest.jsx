import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const FoodRequest = () => {
  const { user } = useAuth();

  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/request/${user?.email}`);
      setFoods(data);
    };
    getData();
  }, [user?.email, axiosSecure]);
  console.log(foods);
  return (
    <div className="my-10">
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Donor Name</th>
              <th>Donor Email</th>
              <th>Pickup location</th>
              <th>Expired Date</th>
              <th>Request Data</th>
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
                <td>{food.donor.name} </td>
                <td>{food.donor.email}</td>
                <td>{food.pickupLocation}</td>
                <td>{new Date(food.expiredDate).toLocaleDateString()}</td>
                <td>{food.reqDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequest;
