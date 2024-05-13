import logo from "../assets/Logo (2).png";
const Footer = () => {
  return (
    <div className="mt-10 ">
      <footer className="flex justify-center px-4 text-gray-800 bg-orange-50 dark:text-white dark:bg-gray-900">
        <div className="container px-6 py-6">
          <h1 className="text-lg text-center lg:text-xl max-w-2xl mx-auto">
            Join our vibrant community dedicated to making a tangible impact in
            the fight against hunger. Join us today and be a catalyst for
            change.
          </h1>

          <div className="flex flex-col justify-center mx-auto my-6 space-y-3 md:space-y-0 md:flex-row">
            <div>
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
      <footer className="footer flex justify-evenly footer-center p-4 text-gray-800 bg-orange-50 dark:text-white dark:bg-gray-900">
        <aside>
          <p>Copyright © 2024 - All right reserved by CareKitchen</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
