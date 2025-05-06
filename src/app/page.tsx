import Navigation from "../app/components/Navigation";
import Header from "../app/components/Header";
import Intro from "./components/Intro";
import BrandedSpacer from "./components/BrandedSpacer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-screen flex items-center justify-center">
        <Navigation />
        <Header />
      </div>
      <Intro />
      <BrandedSpacer />
    </div>
  );
}
