import { motion } from "framer-motion";
import { selectedWork } from "../constants/selectedWork";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import SelectedWorkTile from "./SelectedWorkTile";

const SelectedWork = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Case studies &amp; side projects
        </p>
        <h2 className={styles.sectionHeadText}>Selected Work</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-inkDim font-hanken text-[17px] max-w-2xl leading-[26px]"
      >
        Production systems I&apos;ve shipped at RallyBoard, alongside the
        personal builds I&apos;m proudest of.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[18px]">
        {selectedWork.map((entry) => (
          <SelectedWorkTile
            key={entry.kind === "rallyboard" ? entry.slug : entry.title}
            entry={entry}
          />
        ))}
      </div>

      <div className="flex justify-center mt-9">
        <a
          href="https://github.com/cwharris77"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[13.5px] text-accent border border-line rounded-full px-[22px] py-[10px] hover:border-accent transition duration-[0.2s] ease-in-out"
        >
          More on GitHub →
        </a>
      </div>
    </div>
  );
};

const WrappedSelectedWork = SectionWrapper(SelectedWork, "work");
export default WrappedSelectedWork;
