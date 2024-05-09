import logo from "../assets/Logo (2).png";
const Footer = () => {
  return (
    <div className="mt-10 ">
      <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
        <div className="container px-6 py-6">
          <h1 className="text-lg text-center lg:text-xl max-w-2xl mx-auto">
            Join our vibrant community dedicated to making a tangible impact in
            the fight against hunger. Join us today and be a catalyst for
            change.
          </h1>

          <div className="flex flex-col justify-center mx-auto my-6 space-y-3 md:space-y-0 md:flex-row ">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Email Address"
            />

            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#ff6347] rounded-lg  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Subscribe
            </button>
          </div>

          <hr className="h-px bg-gray-200 border-none  dark:bg-gray-700" />

          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex relative items-center">
              <img className="lg:w-24 w-16" src={logo} alt="" />
              <a className=" lg:text-3xl text-xl absolute lg:left-20 left-12 font-semibold bg-gradient-to-r from-[#ff6347] via-[#ff6347] to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
                CareKitchen
              </a>
            </div>

            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <a className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                  Home
                </a>
                <a className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                  Add Food
                </a>
                <a
                  href="#"
                  className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                >
                  Manage My Foods
                </a>
                <a
                  href="#"
                  className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                >
                  Available Foods
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
