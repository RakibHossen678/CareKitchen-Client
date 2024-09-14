import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="carousel rounded-lg w-full overflow-hidden">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero bg-cover bg-center rounded-lg overflow-hidden min-h-[80vh]"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="max-w-xl mx-auto"
              >
                <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                  className="mb-5 text-5xl font-bold"
                >
                  Together, We Can End Hunger
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  className="mb-5 text-lg"
                >
                  At CareKitchen, we believe in the power of a shared meal. Join
                  us in feeding hope and hearts by donating food to those in
                  need. Every contribution makes a difference.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                  className="btn border-none text-white bg-[#ff6347] hover:bg-[#e5583d] transition-all duration-300"
                >
                  Read More
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#e5583d] transition-all duration-300"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#e5583d] transition-all duration-300"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero bg-cover bg-center rounded-lg overflow-hidden min-h-[75vh]"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="max-w-xl mx-auto"
              >
                <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                  className="mb-5 text-5xl font-bold"
                >
                  Join the Fight Against Hunger
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  className="mb-5 text-lg"
                >
                  Every act of generosity brings us closer to ending hunger. Join
                  hands with us as we work towards a future where no one goes to
                  bed hungry.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                  className="btn border-none text-white bg-[#ff6347] hover:bg-[#e5583d] transition-all duration-300"
                >
                  Read More
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#e5583d] transition-all duration-300"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#e5583d] transition-all duration-300"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero bg-cover bg-center rounded-lg overflow-hidden min-h-[75vh]"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="max-w-xl mx-auto"
              >
                <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                  className="mb-5 text-5xl font-bold"
                >
                  Together, We Can Make a Difference
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  className="mb-5 text-lg"
                >
                  Join CareKitchen in making a difference in the lives of those
                  facing food insecurity. Donate surplus food or volunteer your
                  time to help create a world where everyone has access to
                  nutritious meals.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                  className="btn border-none text-white bg-[#ff6347] hover:bg-[#e5583d] transition-all duration-300"
                >
                  Read More
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#e5583d] transition-all duration-300"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#e5583d] transition-all duration-300"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
