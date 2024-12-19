"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import HeroBanner from "@/components/HeroBanner";

const faqs = [
  {
    question: "What is UrbanVeil?",
    answer:
      "UrbanVeil is an innovative vertical modular forest system designed to integrate greenery into urban spaces, promoting sustainability and biodiversity.",
  },
  {
    question: "How does it benefit cities?",
    answer:
      "UrbanVeil enhances air quality, reduces urban heat islands, and improves urban aesthetics, contributing to a healthier and greener environment.",
  },
  {
    question: "How can I install or partner with UrbanVeil?",
    answer:
      "You can contact us to discuss installation options or partnership opportunities for residential, commercial, or public spaces.",
  },
];

export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <Navbar />

      <main>
        <HeroBanner />
        {/* Hero Section */}
        <section className="relative bg-[url('/hero-image.jpg')] bg-cover bg-center text-white py-20">
          <div className="bg-black bg-opacity-50 p-6 rounded-md max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold">
              UrbanVeil: Transforming Cities, One Vertical Forest at a Time
            </h1>
            <p className="mt-4 text-xl">
              Reimagine urban spaces with our vertical modular forests, blending
              nature with innovation.
            </p>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="py-20 px-8 bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 h-screen">
            {/* Video on the left */}
            <div className="w-full md:w-1/2 h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JtgoVV_Kfjk" // Demo forest video
                title="Forest Solution Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Features on the right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-1/2 h-full p-4">
              {[
                {
                  title: "Smart Irrigation",
                  description:
                    "Automatically adjusts water flow based on plant needs and weather conditions.",
                },
                {
                  title: "Biodiversity Boost",
                  description:
                    "Encourages native species and fosters urban ecosystems.",
                },
                {
                  title: "Modular Design",
                  description:
                    "Easily adaptable to residential, commercial, and public spaces.",
                },
                {
                  title: "Sustainable Growth",
                  description:
                    "Promotes long-term environmental and ecological balance.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all"
                >
                  <h2 className="text-2xl font-semibold">{feature.title}</h2>
                  <p className="text-gray-700 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <div>
  {/* Meet the Team Section */}
  <div>
  {/* Team Section with Heading */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold">The Team</h1>
  </div>

  <div id= "team" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
     { name: "Alex Smith", role: "Project Lead", image: "https://via.placeholder.com/150/0000FF/808080?Text=Alex+Smith" },
     { name: "Jamie Lee", role: "Design Specialist", image: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Jamie+Lee" },
     { name: "Jordan Kim", role: "IoT Engineer", image: "https://via.placeholder.com/150/00FF00/000000?Text=Jordan+Kim" },
    ].map((member, index) => (
      <div
        key={index}
        className="p-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all"
      >
        <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto" />
        <h2 className="text-2xl font-semibold mt-4">{member.name}</h2>
        <p className="text-gray-700">{member.role}</p>
      </div>
    ))}
  </div>
  {/* About and Mission & Vision Section */}
  <section className="flex flex-col md:flex-row py-20 px-8 mt-16">
    {/* Left Side: Mission & Vision */}
    <div className="w-full md:w-1/2">
      <Section id="mission-vision" title="Mission & Vision">
        <div className="grid gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="text-gray-700 mt-2">
              UrbanVeil exists to bring nature back into cities, creating
              green spaces that are sustainable, innovative, and
              self-sustaining.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="text-gray-700 mt-2">
              Our vision is to transform urban environments globally by
              building vertical forests that promote biodiversity, reduce
              carbon footprints, and create healthier communities.
            </p>
          </div>
        </div>
      </Section>
    </div>

    {/* Right Side: About Us */}
    <div className="w-full md:w-1/2">
      <Section id="about" title="About UrbanVeil">
        <p className="text-xl max-w-2xl mx-auto mt-4">
          UrbanVeil reimagines green living with its innovative vertical
          modular forests, adaptable to any space.
        </p>
        <ul className="list-disc mt-4 text-left mx-auto max-w-md">
          <li>Native Plants: Attract bees, birds, and butterflies.</li>
          <li>Smart Irrigation: Efficient water usage.</li>
          <li>IoT Sensors: Track air quality and carbon absorption.</li>
        </ul>
      </Section>
    </div>
  </section>
</div>

</div>

        <section className="py-20 px-8 bg-gray-100">
          <h2 className="text-4xl font-semibold text-center">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold">Urban Pollution</h3>
              <p className="text-gray-700 mt-2">
                Cities are facing a severe rise in pollution levels, affecting
                health and environment.
              </p>
              <img
                src="pollution.jpg"
                alt="Urban Pollution"
                className="mt-4 w-full rounded-lg"
              />
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold">Lack of Green Spaces</h3>
              <p className="text-gray-700 mt-2">
                Urban areas are losing green spaces, leading to deteriorating
                air quality.
              </p>
              <img
                src="green_space.jpg"
                alt="Green Spaces"
                className="mt-4 w-full rounded-lg"
              />
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold">Declining Biodiversity</h3>
              <p className="text-gray-700 mt-2">
                The reduction of biodiversity in cities leads to negative
                ecological impacts.
              </p>
              <img
                src="biodiversity.jpg"
                alt="Declining Biodiversity"
                className="mt-4 w-full rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="py-20 px-8 bg-white">
          <h2 className="text-4xl font-semibold text-center">Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-green-200 p-6 shadow-lg rounded-lg hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold">Modular Design</h3>
              <p className="text-gray-700 mt-2">
                Our system can adapt to various spaces, ensuring scalability and
                versatility.
              </p>
              <img
                src="modular_design.jpg"
                alt="Modular Design"
                className="mt-4 w-full rounded-lg"
              />
            </div>
            <div className="bg-blue-200 p-6 shadow-lg rounded-lg hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold">IoT Integration</h3>
              <p className="text-gray-700 mt-2">
                Sensors track air quality, water usage, and plant health for
                optimal performance.
              </p>
              <img
                src="iot_integration.jpg"
                alt="IoT Integration"
                className="mt-4 w-full rounded-lg"
              />
            </div>
            <div className="bg-yellow-200 p-6 shadow-lg rounded-lg hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold">Environmental Benefits</h3>
              <p className="text-gray-700 mt-2">
                UrbanVeil reduces CO2, promotes biodiversity, and mitigates
                urban heat islands.
              </p>
              <img
                src="environmental_benefits.jpg"
                alt="Environmental Benefits"
                className="mt-4 w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-8 bg-white">
          <h2 className="text-4xl font-semibold text-center">
            Sustainability Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-green-200 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold">Environmental Benefits</h3>
              <p className="text-gray-700 mt-2">
                UrbanVeil helps reduce CO2, support biodiversity, and mitigate
                climate change.
              </p>
              <img
                src="sustainability_chart.jpg"
                alt="Sustainability Chart"
                className="mt-4 w-full rounded-lg"
              />
            </div>
            <div className="p-6 bg-blue-200 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold">Social Benefits</h3>
              <p className="text-gray-700 mt-2">
                Improved mental health, community engagement, and urban
                beautification.
              </p>
              <img
                src="community_benefit.jpg"
                alt="Social Benefits"
                className="mt-4 w-full rounded-lg"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold">SDG Alignment</h3>
            <p className="text-gray-700 mt-2">
              UrbanVeil contributes to several UN Sustainable Development Goals,
              including SDG 11 (Sustainable Cities) and SDG 13 (Climate Action).
            </p>
          </div>
        </section>
        {/* FAQs Section */}
        <Section id="faqs" title="FAQs">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md shadow-lg">
                <button
                  className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span>
                    {activeFAQ === index ? (
                      <svg
                        className="h-5 w-5 transform rotate-180 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {activeFAQ === index && (
                  <div className="p-4 bg-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <section id="contact" className="py-20 px-8 bg-gray-100">
          <h2 className="text-4xl font-semibold text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto mt-8">
            <form className="bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="text-center">
          <p>&copy; 2024 UrbanVeil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
