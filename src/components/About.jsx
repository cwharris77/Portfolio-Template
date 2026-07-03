import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-bgElev border border-line rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <p className="text-inkDim font-mono text-[13px]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-ink text-[18px] font-bold font-hanken text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <div className="-mt-[9rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-inkDim font-hanken text-[18px] max-w-6xl leading-[30px]"
      >
        I&#39;m a full stack software engineer currently at RallyBoard, where I
        help build the platform associations use to launch and run peer learning
        cohorts, from AI-powered member matching to the engagement analytics
        that show organizations what&#39;s actually working. Before that, I
        spent time at Snap Inc. on the Business Experience team, working across
        the stack to improve how businesses and advertisers interacted with the
        platform. I enjoy the full picture, from backend systems to the
        interfaces people actually use. Lately, I&#39;ve also been exploring
        mobile app development, which has been a fun way to try something new
        and build things on my own.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const AboutSection = SectionWrapper(About, "about");

export default AboutSection;
