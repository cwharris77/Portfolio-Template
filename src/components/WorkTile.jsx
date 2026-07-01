import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const WorkTile = ({ entry }) => {
  const location = useLocation();
  const reveal = useScrollReveal();
  const { slug, title, oneLiner, timeline } = entry;

  return (
    <motion.div
      layoutId={`tile-${slug}`}
      whileHover={{ y: -4 }}
      className="bg-bgElev border border-line rounded-2xl overflow-hidden"
    >
      <Link
        to={`/work/${slug}`}
        state={{ background: location }}
        ref={reveal}
        className="block p-6 h-full"
      >
        <p className="text-inkDim text-[14px] font-hanken uppercase tracking-wider">
          {timeline}
        </p>
        <h3 className="text-ink font-bricolage text-[24px] leading-tight mt-2">
          {title}
        </h3>
        <p className="text-inkDim font-hanken text-[15px] mt-3 leading-[24px]">
          {oneLiner}
        </p>
        <span className="text-accent font-hanken text-[14px] mt-4 inline-block">
          View case study →
        </span>
      </Link>
    </motion.div>
  );
};

WorkTile.propTypes = {
  entry: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    oneLiner: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkTile;
