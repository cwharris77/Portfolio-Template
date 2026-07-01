import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { download, downloadHover, resume } from "../assets";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "var(--bg-elev)",
      color: "var(--ink)",
      border: "1px solid var(--line)",
      boxShadow:
        "rgba(0, 0, 0, 0.3) 0px 10px 15px -3px, rgba(0, 0, 0, 0.15) 0px 4px 6px -2px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid var(--bg-elev)",
    }}
    date={
      <div>
        <h3 className="text-inkDim text-[18px] font-bold font-hanken">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-ink text-[24px] font-bold font-bricolage tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-accent text-[22px] font-semibold tracking-[1px] font-hanken"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
  }).isRequired,
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I&apos;ve done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "var(--bg-elev)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 10px 15px -3px, rgba(0, 0, 0, 0.15) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid var(--bg-elev)",
            }}
            iconStyle={{ background: "var(--bg-elev)" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between
              sm:text-[18px] text-[14px] text-bgDeep
              font-bold font-hanken items-center py-5 pl-3 pr-3
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px]
              w-[125px] h-[46px] rounded-[10px] bg-accent
              sm:mt-[22px] mt-[16px] hover:opacity-90
              transition duration-[0.2s]
              ease-in-out"
              onClick={() =>
                window.open(
                  "/Cooper_Harris_Resume.pdf", //paste the link to your resume here
                  "_blank",
                )
              }
              onMouseOver={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", download);
              }}
            >
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

const WrappedExperience = SectionWrapper(Experience, "experience");
export default WrappedExperience;
