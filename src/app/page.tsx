import Navigation from "../app/components/Navigation";
import Header from "../app/components/Header";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        <Navigation />
        <Header />
      </div>
      <Intro />
    </>
  );
}
