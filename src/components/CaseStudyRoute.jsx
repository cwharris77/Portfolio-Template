import { useParams } from "react-router-dom";
import CaseStudy from "./CaseStudy";

const CaseStudyRoute = () => {
  const { slug } = useParams();
  return <CaseStudy slug={slug} />;
};

export default CaseStudyRoute;
