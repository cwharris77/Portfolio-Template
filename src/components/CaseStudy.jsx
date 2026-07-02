import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { snapWorkLog } from "../constants/snapWorkLog";
import { workLog } from "../constants/workLog";
import { useCountUp } from "../hooks/useCountUp";
import { getAdjacentSlugs } from "./work/getAdjacentSlugs";

const allWork = [...workLog, ...snapWorkLog];

const Metric = ({ label, value }) => {
  const { ref, display } = useCountUp(value);
  return (
    <div className="border border-line rounded-xl p-4 bg-bgElev">
      <p ref={ref} className="text-accent font-bricolage text-[28px]">
        {display}
      </p>
      <p className="text-inkDim font-hanken text-[13px] uppercase tracking-wide mt-1">
        {label}
      </p>
    </div>
  );
};
Metric.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const Block = ({ heading, children }) => (
  <section className="mt-10">
    <h3 className="text-ink font-bricolage text-[22px]">{heading}</h3>
    <div className="text-inkDim font-hanken text-[16px] leading-[28px] mt-3">
      {children}
    </div>
  </section>
);
Block.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const CaseStudy = ({ slug, onClose }) => {
  const entry = allWork.find((w) => w.slug === slug);
  const { prev, next } = getAdjacentSlugs(slug, allWork);

  useEffect(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!entry) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-ink">
        <p className="font-hanken">Project not found.</p>
        <Link to="/" className="text-accent">
          ← Back to all work
        </Link>
      </div>
    );
  }

  const { title, oneLiner, timeline, role, stack, metrics, sections } = entry;

  return (
    <motion.article
      layoutId={`tile-${slug}`}
      className="min-h-screen bg-bgDeep"
    >
      <div className="sticky top-0 z-20 bg-bgDeep/90 backdrop-blur border-b border-line">
        {onClose ? (
          <button onClick={onClose} className="text-accent font-hanken p-4">
            ← All work
          </button>
        ) : (
          <Link
            to="/#work"
            className="text-accent font-hanken p-4 inline-block"
          >
            ← Back to all work
          </Link>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-inkDim font-hanken uppercase tracking-wider text-[14px]">
          {timeline} · {role}
        </p>
        <h1 className="text-ink font-bricolage text-[44px] leading-tight mt-2">
          {title}
        </h1>
        <p className="text-inkDim font-hanken text-[18px] mt-4 leading-[30px]">
          {oneLiner}
        </p>

        <ul className="flex flex-wrap gap-2 mt-5">
          {stack.map((s) => (
            <li
              key={s}
              className="text-ink font-hanken text-[13px] border border-line rounded-full px-3 py-1"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {metrics.map((m) => (
            <Metric key={m.label} label={m.label} value={m.value} />
          ))}
        </div>

        <Block heading="Problem">{sections.problem}</Block>
        <Block heading="What I built">{sections.build}</Block>
        <Block heading="Challenges">{sections.challenges}</Block>
        <Block heading="Decisions">
          <div className="grid md:grid-cols-2 gap-4">
            {sections.decisions.map((d) => (
              <div
                key={d.decision}
                className="border border-line rounded-xl p-4"
              >
                <p className="text-ink font-hanken font-semibold">
                  {d.decision}
                </p>
                <p className="text-inkDim font-hanken text-[15px] mt-2">
                  {d.rationale}
                </p>
              </div>
            ))}
          </div>
        </Block>
        <Block heading="Results">{sections.results}</Block>

        <div className="flex justify-between mt-14 border-t border-line pt-6">
          {prev ? (
            <Link to={`/work/${prev}`} className="text-accent font-hanken">
              ← Previous
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/work/${next}`} className="text-accent font-hanken">
              Next →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </motion.article>
  );
};

CaseStudy.propTypes = {
  slug: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default CaseStudy;
