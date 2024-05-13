import { MdNote } from "react-icons/md";
import { Link } from "react-router-dom";

const Feature = ({ food }) => {
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
  // console.log(food);
  return (
    <div>
      <div className="flex flex-col max-w-md p-4 space-y-6 overflow-hidden rounded-lg shadow-md ">
        <div className="flex space-x-4">
          <img
            alt=""
            src={donor?.image}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {donor?.name}
            </a>
            <span className="text-xs text-gray-400">{donor?.email}</span>
          </div>
        </div>
        <div>
          <img
            src={foodImg}
            alt=""
            className="object-cover w-full mb-4 h-60 bg-cover bg-center"
          />
          <h2 className="mb-1 text-xl font-semibold">{foodName}</h2>

          <div className="flex py-2 justify-between items-center">
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
        <div className="">
          <Link to={`/details/${_id}`}>
            <button className=" w-full bg-[#ff6347] items-center text-white rounded-lg p-2 space-x-1.5">
              View Details
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Feature;
