import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const teamMembers = [
  { name: 'Alex Smith', role: 'Project Lead' },
  { name: 'Jamie Lee', role: 'Design Specialist' },
  { name: 'Jordan Kim', role: 'IoT Engineer' },
];

export default function Team() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">Meet the Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-forest-dark">{member.role}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
