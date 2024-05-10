import { MdNote } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
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
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="">
        <img className="w-full h-[400px] " src={foodImg} alt="" />
      </div>
      <div className="">
        <div className="flex space-x-2 py-3">
            <img className="w-14 rounded-lg" src={donor?.image} alt="" />
            <div>

            <h1>{donor.name}</h1>
            <h1>{donor.email}</h1>
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
            <Link to='/availableFood'>
            <button 
             className="bg-[#ff6347] items-center text-white rounded-lg py-2 px-4 space-x-1.5">All Food</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
