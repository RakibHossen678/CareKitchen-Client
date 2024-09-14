import logo from "../assets/Logo (2).png";

const Footer = () => {
  return (
    <div className="mt-10 bg-orange-50">
      <footer className="flex justify-center px-4 text-gray-800">
        <div className="container px-6 py-8">
          <h1 className="text-lg text-center lg:text-xl max-w-2xl mx-auto mb-6">
            Join our vibrant community dedicated to making a tangible impact in
            the fight against hunger. Join us today and be a catalyst for
            change.
          </h1>

          <div className="flex flex-col justify-center mx-auto space-y-3 md:space-y-0 md:flex-row md:space-x-4">
            <input
              id="email"
              type="email"
              className="px-4 w-full lg:w-64 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#ff6347]"
              placeholder="Email Address"
            />
            <button className="w-full md:w-auto px-6 py-2 text-sm font-medium tracking-wider text-white bg-[#ff6347] rounded-lg hover:bg-orange-600 transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-orange-300">
              Subscribe
            </button>
          </div>

          <hr className="h-px bg-gray-300 my-8" />

          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-2">
              <img className="lg:w-24 w-16" src={logo} alt="CareKitchen Logo" />
              <span className="lg:text-3xl text-xl font-semibold bg-gradient-to-r from-[#ff6347] via-[#ff6347] to-green-400 text-transparent bg-clip-text">
                CareKitchen
              </span>
            </div>

            <nav className="flex mt-4 md:mt-0 space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500 hover:underline">
                Home
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500 hover:underline">
                Add Food
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500 hover:underline">
                Manage My Foods
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500 hover:underline">
                Available Foods
              </a>
            </nav>
          </div>
        </div>
      </footer>

      <footer className="flex justify-between items-center px-4 py-4 bg-orange-100 text-gray-800">
        <p className="text-sm">Copyright © 2024 - All rights reserved by CareKitchen</p>

        <nav className="flex space-x-4">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-600 hover:text-blue-500 transition-colors"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-600 hover:text-blue-500 transition-colors"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-600 hover:text-blue-500 transition-colors"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
