import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const ProjectCard = ({
  id,
  name,
  description,
  tags,
  image,
  demo,
  repo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id
          ? "lg:flex-[3.5] flex-[10] min-h-[60vh]"
          : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] 
      sm:h-[70vh] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className='absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]'
      ></div>

      <img
        src={image}
        alt={name}
        className='absolute w-full h-full object-cover rounded-[24px]'
      />

      {active !== id ? (
        <div className='flex items-center justify-center pr-[4.5rem]'>
          <h3
            className='font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none'
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className='absolute bottom-0 p-4 justify-start w-full 
            flex-col bg-[rgba(126,122,122,0.7)] rounded-b-[24px] z-20 gap-8'
          >
            <div className=' flex justify-between'>
              <h2
                className='font-bold sm:text-[2rem] text-[1.5rem] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]'
              >
                {name}
              </h2>
              <div id='project-buttons' className='flex gap-2'>
                <div
                  onClick={() => window.open(repo, "_blank")}
                  className='bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8] hover:bg-battleGray'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-4/5 h-4/5 object-contain'
                  />
                </div>

                {demo && (
                  <button
                    onClick={() => window.open(demo, "_blank")}
                    className='bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-md
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8] hover:bg-battleGray px-8 sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman'
                  >
                    DEMO
                  </button>
                )}
              </div>
            </div>

            <p
              className='text-white sm:text-[1rem] text-[.9rem] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]'
            >
              {description}
            </p>
            <ul className='list-none sm:flex flex-row gap-1 mt-4 items-center'>
              {tags.map((tag, index) => [
                <li
                  key={tag.name}
                  className='text-white sm:text-[1rem] text-[.8rem]'
                >
                  {tag.name}
                </li>,
                index !== tags.length - 1 && (
                  <li className='hidden sm:block' key={index}>
                    &#8226;
                  </li>
                ),
              ])}
            </ul>
            {/* <button
              className="live-demo flex justify-center 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              // onClick={() => window.open(demo, '_blank')}
              onClick={() => setShowInfo(!showInfo)}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
            DEMO
            </button> */}
          </div>
          {/* <InfoTile info={info} active={active}></InfoTile> */}
        </>
      )}
    </motion.div>
  );
};
ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const Projects = () => {
  const [active, setActive] = useState("project-1");

  return (
    <div className='-mt-[9rem]'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]'
        >
          These projects highlight my hands-on experience across the full web
          development stack. Each example includes links to source code which
          has a longer description and some have demos. Together, they
          demonstrate my ability to design scalable features, solve complex
          technical challenges, and collaborate effectively in real-world
          engineering environments.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className='mt-[55px]'>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className='w-full'
          >
            <CarouselContent>
              {Array.from({ length: Math.ceil(projects.length / 5) }).map(
                (_, chunkIndex) => (
                  <CarouselItem key={chunkIndex}>
                    <div className='flex lg:flex-row flex-col lg:min-h-[70vh] min-h-[90vh] sm:gap-4 gap-4'>
                      {projects
                        .slice(chunkIndex * 5, (chunkIndex + 1) * 5)
                        .map((project, index) => (
                          <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                            active={active}
                            handleClick={setActive}
                          />
                        ))}
                      {/* Add placeholders to maintain flex layout on desktop */}
                      {Array.from({
                        length:
                          5 -
                          projects.slice(chunkIndex * 5, (chunkIndex + 1) * 5)
                            .length,
                      }).map((_, i) => (
                        <div
                          key={`placeholder-${i}`}
                          className='lg:flex-[0.5] flex-[2] min-w-[170px]'
                        />
                      ))}
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious className='-left-4 lg:-left-12' />
            <CarouselNext className='-right-4 lg:-right-12' />
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

const WrappedProjects = SectionWrapper(Projects, "projects");
export default WrappedProjects;
