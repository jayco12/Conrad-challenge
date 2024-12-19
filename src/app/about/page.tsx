import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">About Urbanveil</h1>
        <p className="mt-4 text-lg">
          Modular Vertical Forests: adaptable systems transforming barren walls into lush, living ecosystems.
          <br />
          <strong>Our magic:</strong>
        </p>
        <ul className="list-disc mt-4 mx-auto max-w-lg text-left">
          <li>Native Plants: Attract bees, birds, and butterflies.</li>
          <li>Smart Irrigation: Efficient water usage.</li>
          <li>IoT Sensors: Track air quality and carbon absorption.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
