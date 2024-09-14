import { motion } from "framer-motion";
import img1 from "../assets/inspire.jpg";

const Inspire = () => {
  return (
    <div className="flex gap-8 lg:flex-row flex-col items-center my-24 px-4">
      <div className="lg:flex-1">
        <motion.img
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src={img1}
          className="rounded-xl shadow-lg"
          alt="Inspirational image related to mission"
          loading="lazy"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="lg:flex-1"
      >
        <div>
          <h2 className="text-md font-semibold">What Inspires Us?</h2>
          <h1 className="text-5xl py-3 font-bold">
            <span className="text-[#ff6347]">Smiles are</span> <br />
            true testimonials!
          </h1>
          <ol className="list-disc px-4 space-y-2 mt-4">
            <li>
              Every empty stomach represents an opportunity for us to make a
              difference. The knowledge that our actions can directly alleviate
              hunger and provide nourishment to individuals and families facing
              food insecurity inspires us to continue our efforts tirelessly. We
              believe that no one should ever have to go to bed hungry, and this
              belief propels us forward in our mission.
            </li>
            <li>
              The generosity and compassion of our community members inspire us
              daily. Witnessing individuals, businesses, and organizations come
              together to support those in need reinforces our belief in the
              power of unity and collective action. It's the strength of our
              community that fuels our resolve and empowers us to make a
              meaningful impact.
            </li>
            <li>
              We are inspired by the transformation power of providing access to
              nutritious food. By empowering individuals to lead healthier and
              more fulfilling lives, we contribute to the well-being and
              resilience of our community. Knowing that our donations can help
              people overcome challenges and pursue their goals fills us with a
              sense of purpose and fulfillment.
            </li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Inspire;
