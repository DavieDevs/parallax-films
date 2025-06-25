import Navigation from "../app/components/Navigation";
import Header from "../app/components/Header";
import Intro from "./components/Intro";
import BrandedSpacer from "./components/BrandedSpacer";
import FeatureFilmSection from "./components/FeatureFilmSection";
import Bio from "./components/Bio";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-screen flex items-center justify-center">
        <Navigation />
        <Header />
      </div>
      <Intro />
      <BrandedSpacer />
      <FeatureFilmSection />
      <Bio />
      <Testimonial />
    </div>
  );
}
