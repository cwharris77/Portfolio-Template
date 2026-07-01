// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Tech,
  Work,
} from "./components";
import CaseStudy from "./components/CaseStudy";
import CaseStudyRoute from "./components/CaseStudyRoute";

const Home = () => (
  <div className="relative z-0">
    <div>
      <Navbar />
      <Hero />
    </div>
    <div className="bg-about bg-cover bg-center bg-no-repeat">
      <About />
    </div>
    <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
      <Tech />
    </div>
    <Projects />
    <Work />
    <div className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
      <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
        <Experience />
      </div>
    </div>
    <div className="relative z-0">
      <Contact />
    </div>
    <Footer />
  </div>
);

const CaseStudyOverlay = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <CaseStudy slug={slug} onClose={() => navigate(-1)} />
    </div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudyRoute />} />
      </Routes>

      <AnimatePresence>
        {background && (
          <Routes location={location} key="overlay">
            <Route path="/work/:slug" element={<CaseStudyOverlay />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
    <SpeedInsights />
    <Analytics />
  </BrowserRouter>
);

export default App;
