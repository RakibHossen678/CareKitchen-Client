const Feature = ({ food }) => {
  const {
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
    <div>
      <div className="flex flex-col max-w-md p-4 space-y-6 overflow-hidden rounded-lg shadow-md ">
        <div className="flex space-x-4">
          <img
            alt=""
            src={donor.image}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {donor.name}
            </a>
            <span className="text-xs text-gray-400">{donor.email}</span>
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
              Expire Date : {new Date(expiredDate).toLocaleDateString()}
            </p>
            <p>Quantity : {foodQuantity} servings</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
             
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
             
            </button>
          </div>
          <div className="flex space-x-2 text-sm text-gray-400">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              
              
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
             
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
