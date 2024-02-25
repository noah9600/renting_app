import AboutUs from "@/components/AboutUs/AboutUs";
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ListingCards from "@/components/Listings/Listings";
import Testimonials from "@/components/Testimonials/testimonials";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <AboutUs />
      <ListingCards />
      <Testimonials />
      <Footer />
    </div>
  )
}
