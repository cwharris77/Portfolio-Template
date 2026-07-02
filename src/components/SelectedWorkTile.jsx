import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Badge = ({ label, color, border, bg }) => (
  <span
    className="font-mono text-[10.5px] tracking-[0.1em] px-[10px] py-1 rounded-full border"
    style={{ color, borderColor: border, background: bg }}
  >
    {label}
  </span>
);
Badge.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

const TileBody = ({ entry }) => {
  const {
    title,
    oneLiner,
    stack,
    badge,
    badgeColor,
    badgeBorder,
    badgeBg,
    logo,
  } = entry;
  return (
    <div className="p-5 flex flex-col gap-[9px] flex-1">
      <div className="flex items-center justify-between gap-[10px]">
        {logo ? (
          <span
            className="w-7 h-7 rounded-lg bg-cover bg-center border border-line block"
            style={{ backgroundImage: `url(${logo})` }}
          />
        ) : (
          <span className="w-7 h-7 block" />
        )}
        <Badge
          label={badge}
          color={badgeColor}
          border={badgeBorder}
          bg={badgeBg}
        />
      </div>
      <h3 className="text-ink font-bricolage text-[18.5px] leading-tight">
        {title}
      </h3>
      <p className="text-inkDim font-hanken text-[14px] leading-[21px] flex-1">
        {oneLiner}
      </p>
      <p className="text-inkDim font-mono text-[11px]">{stack}</p>
    </div>
  );
};
TileBody.propTypes = {
  entry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    oneLiner: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    badgeColor: PropTypes.string.isRequired,
    badgeBorder: PropTypes.string.isRequired,
    badgeBg: PropTypes.string.isRequired,
    logo: PropTypes.string,
  }).isRequired,
};

const RallyBoardTile = ({ entry }) => {
  const location = useLocation();
  const reveal = useScrollReveal();
  return (
    <motion.div
      layoutId={`tile-${entry.slug}`}
      whileHover={{ y: -4 }}
      className="bg-bgElev border border-line rounded-2xl overflow-hidden flex flex-col cursor-pointer"
    >
      <Link
        to={`/work/${entry.slug}`}
        state={{ background: location }}
        ref={reveal}
        className="flex flex-col flex-1"
      >
        <TileBody entry={entry} />
        <div className="px-5 pb-5 -mt-2">
          <span className="text-accent font-hanken text-[13px] font-semibold">
            Read more →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
RallyBoardTile.propTypes = {
  entry: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
};

const PersonalTile = ({ entry }) => {
  const reveal = useScrollReveal();
  return (
    <motion.div
      ref={reveal}
      whileHover={{ y: -4 }}
      className="bg-bgElev border border-line rounded-2xl overflow-hidden flex flex-col"
    >
      <TileBody entry={entry} />
      <div className="px-5 pb-5 -mt-2 flex gap-3">
        {entry.demo && (
          <a
            href={entry.demo}
            target="_blank"
            rel="noreferrer"
            className="text-accent font-hanken text-[13px] font-semibold"
          >
            demo ↗
          </a>
        )}
        {entry.repo && (
          <a
            href={entry.repo}
            target="_blank"
            rel="noreferrer"
            className="text-accent font-hanken text-[13px] font-semibold"
          >
            repo ↗
          </a>
        )}
      </div>
    </motion.div>
  );
};
PersonalTile.propTypes = {
  entry: PropTypes.shape({
    demo: PropTypes.string,
    repo: PropTypes.string,
  }).isRequired,
};

const SelectedWorkTile = ({ entry }) =>
  entry.kind === "personal" ? (
    <PersonalTile entry={entry} />
  ) : (
    <RallyBoardTile entry={entry} />
  );
SelectedWorkTile.propTypes = {
  entry: PropTypes.shape({
    kind: PropTypes.oneOf(["rallyboard", "snap", "personal"]).isRequired,
  }).isRequired,
};

export default SelectedWorkTile;
