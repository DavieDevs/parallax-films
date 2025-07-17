import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Inquiry from "../components/Inquiry";

export default function Contact() {
  return (
    <div className="bg-mosswood min-h-screen flex flex-col items-center">
      <Navigation />

      <main className="w-full pt-40 px-4">
        <Inquiry />
      </main>

      <Footer />
    </div>
  );
}
