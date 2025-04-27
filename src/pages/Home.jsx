import AboutUs from '../pages/AboutUs';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className="bg-ultra-black">
      {/* Add other sections like a hero section here if needed */}
      <AboutUs />
      <Services />
    </div>
  );
}