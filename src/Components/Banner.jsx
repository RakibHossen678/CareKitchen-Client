import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div>
      <div className="carousel  rounded-lg w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero bg-cover bg-center object-cover rounded-lg overflow-hidden max-h-[550px]"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <motion.div
                initial={{ opacity: 0, x: -700 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  X: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="max-w-xl"
              >
                <h1 className="mb-5 text-5xl font-bold">
                  Together, We Can End Hunger
                </h1>
                <p className="mb-5">
                  At CareKitchen, we believe in the transformative power of a
                  shared meal. Join us in our mission to feed hope and hearts by
                  donating food to those in need. Every contribution makes a
                  difference in nourishing our communities and spreading
                  compassion.
                </p>
                <button className="btn border-none text-white bg-[#ff6347]">
                  Read More
                </button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#ff6347]"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#ff6347]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero bg-cover bg-center object-cover rounded-lg overflow-hidden max-h-[550px]"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <motion.div
                initial={{ opacity: 0, x: -700 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  X: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="max-w-xl"
              >
                <h1 className="mb-5 text-5xl font-bold">
                  Join the Fight Against Hunger
                </h1>
                <p className="mb-5">
                  Welcome to CareKitchen, where every act of generosity brings
                  us closer to ending hunger. Join hands with us as we work
                  towards a future where no one goes to bed hungry. Your support
                  matters, whether it's through food donations, volunteering, or
                  spreading awareness.
                </p>
                <button className="btn border-none text-white bg-[#ff6347]">
                  Read More
                </button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#ff6347]"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#ff6347]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero bg-cover bg-center object-cover min-h-[550px]"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <motion.div
                initial={{ opacity: 0, x: -700 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  X: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="lg:max-w-xl max-w-md "
              >
                <h1 className="mb-5 text-5xl font-bold">
                  Together, We Can Make a Difference
                </h1>
                <p className="mb-5">
                  Take a stand against hunger with CareKitchen. Together, we can
                  make a tangible difference in the lives of those facing food
                  insecurity. Explore ways to get involved, from donating
                  surplus food to volunteering your time. Let's create a world
                  where everyone has access to nutritious meals.
                </p>
                <button className="btn border-none text-white bg-[#ff6347]">
                  Read More
                </button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#ff6347]"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#ff6347] border-none text-white hover:bg-[#ff6347]"
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
