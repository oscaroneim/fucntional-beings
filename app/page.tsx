import Banner from "./components/Banner";
import Treatments from "./components/Treatments";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import NavBar from "./components/Nav";

export default function Home() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <NavBar />
      <Banner />
      <Treatments />
      <Prices />
      <Reviews />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}
