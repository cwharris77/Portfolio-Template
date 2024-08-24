import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Add this line to import PropTypes
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({ index, title, icon }) => {
  // Add prop type validation for 'index'
  ServiceCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[9rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}></h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-6xl leading-[30px]">
          Having graduated with a double major in Computer Science and Information Science Technology and the Arts
          from the University of Arizona, I possess comprehensive knowledge 
          and skills focusing on web development and software engineering. Now working at Snap Inc., 
          my proficiency continues to extend across several programming languages, including Java, 
          Python, Javascript, Swift, and C. I have also gained experience building web applications 
          using frameworks such as Express, React, Flask, and Django. Whether it&apos;s building RESTful APIs or 
          crafting dynamic user interfaces, I bring a versatile skill set to the table.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const AboutSection = SectionWrapper(About, 'about');

export default AboutSection;
