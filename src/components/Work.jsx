import { motion } from "framer-motion";
import { workLog } from "../constants/workLog";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import WorkTile from "./WorkTile";

const Work = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I&apos;ve shipped</p>
        <h2 className={styles.sectionHeadText}>Work</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-inkDim font-hanken text-[18px] max-w-3xl leading-[30px]"
      >
        A record of production engineering at RallyBoard — what I built, the
        decisions behind it, and the results. Click any project for the full
        case study.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {workLog.map((entry) => (
          <WorkTile key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
};

const WrappedWork = SectionWrapper(Work, "work");
export default WrappedWork;
