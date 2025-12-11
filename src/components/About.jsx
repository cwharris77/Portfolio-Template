import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Add this line to import PropTypes
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  // Add prop type validation for 'index'
  ServiceCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-taupe text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className='-mt-[9rem]'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-taupe text-[18px] max-w-6xl leading-[30px]'
      >
        As a former full stack software engineer at Snap Inc. on the Business
        Experience team, I focused on building and maintaining end-to-end
        solutions that improved tools for businesses on the platform. I worked
        on both front-end interfaces and back-end systems, ensuring that
        business partners and advertisers had a seamless and efficient
        experience. Collaborating closely with product managers, designers, and
        other engineering teams, I helped deliver scalable, reliable, and
        high-performance features that optimized how businesses interacted with
        Snap&#39;s services.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const AboutSection = SectionWrapper(About, "about");

export default AboutSection;
