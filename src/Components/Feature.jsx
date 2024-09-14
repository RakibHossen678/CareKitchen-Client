import { MdNote } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

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

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
    >
      <div className="flex flex-col max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full">
        {/* Donor Information */}
        <div className="flex items-center space-x-4">
          <img
            alt="Donor Avatar"
            src={
              donor?.image ||
              "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=6hQNACQQjktni8CxSS_QSPqJv2tycskYmpFGzxv3FNs="
            }
            className="object-cover w-12 h-12 rounded-full shadow-md bg-gray-200"
          />
          <div className="flex flex-col space-y-1">
            <h3 className="text-sm font-semibold text-gray-900">
              {donor?.name}
            </h3>
            <span className="text-xs text-gray-500">{donor?.email}</span>
          </div>
        </div>

        {/* Food Image */}
        <div className="relative">
          <img
            src={foodImg}
            alt={foodName}
            className="object-cover w-full h-60 rounded-lg"
          />
        </div>

        {/* Food Info */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-bold text-gray-800">{foodName}</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <p>
              <span className="font-semibold">Expire Date</span>:{" "}
              {new Date(expiredDate).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Quantity</span>: {foodQuantity}{" "}
              servings
            </p>
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Pickup Location</span>:{" "}
            {pickupLocation}
          </p>
          {notes && (
            <p className="flex items-start text-gray-600 text-sm">
              <MdNote className="text-xl mr-2" />
              <span>{notes}</span>
            </p>
          )}
        </div>

        {/* View Details Button */}
        <div className="mt-auto">
          <Link to={`/details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full py-3 text-white font-semibold bg-[#ff6347] rounded-lg hover:bg-[#e5583d] transition-all duration-300"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

Feature.propTypes = {
  food: PropTypes.object.isRequired,
};

export default Feature;
