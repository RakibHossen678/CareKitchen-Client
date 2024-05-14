import img1 from "../assets/volunteer.jpg";
import { motion } from "framer-motion";
const Volunteer = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: -10, opacity: 1 }}
        transition={{
          delay: 0.2,
          X: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="max-w-2xl mx-auto text-center my-10"
      >
        <h1 className="text-4xl font-semibold py-2">Volunteer Opportunities</h1>
        <p className="pt-5">
          At CareKitchen, volunteers play a vital role in our mission to combat
          food insecurity and support those in need within our community. We
          offer a variety of volunteer opportunities that allow individuals like
          you to contribute your time, skills, and passion to make a tangible
          difference in the lives of others.
        </p>
      </motion.div>
      <div className="flex gap-8 lg:flex-row flex-col items-center ">
        <div className="lg:flex-1">
          <motion.img
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              X: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={img1}
            className="rounded-xl"
            alt=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            X: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="lg:flex-1"
        >
          <div>
            <h1 className="text-lg font-semibold">How You Can Help</h1>
            <ol className="list-decimal px-4 space-y-2">
              <li>
                <span className="font-semibold">
                  Food Sorting and Packaging:
                </span>
                Assist our team in sorting, organizing, and packaging donated
                food items. Your efforts will ensure that nutritious meals reach
                those who need them most.
              </li>
              <li>
                <span className="font-semibold">Distribution Assistance:</span>
                Help distribute food parcels and meals to individuals and
                families at our distribution centers or community events. Your
                support ensures efficient and equitable access to essential
                resources.
              </li>
              <li>
                <span className="font-semibold"> Event Coordination:</span>
                Get involved in planning and coordinating fundraising events,
                food drives, or awareness campaigns. Your creativity and
                dedication will help us engage the community and raise vital
                funds for our programs.
              </li>
            </ol>
          </div>
          <div>
            <h1 className="text-lg font-semibold py-2">
              Benefits of Volunteering
            </h1>
            <p>
              Ready to make a difference? Join our volunteer team and be a part
              of our efforts to create a hunger-free community. Whether you can
              spare a few hours a week or want to get involved in a special
              project, your commitment and enthusiasm are invaluable.
            </p>
            <p className="py-3">
              To learn more about volunteer opportunities or to sign up, please
              <span className="text-[#ff6347]"> contact us</span> or fill out
              our volunteer{" "}
              <span className="text-[#ff6347]"> registration</span> form.
              Together, we can make a difference, one volunteer at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Volunteer;
