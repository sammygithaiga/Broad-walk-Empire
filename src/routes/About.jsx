

import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div className="about mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            We are a passionate team of real estate professionals dedicated to
            helping you find your dream home or sell your current property for
            the best possible price. With extensive experience in the local
            market, we have the knowledge and expertise to guide you through
            every step of the real estate process.
          </p>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Values</h1>
          <ol className="list-decimal list-inside">
            <li>Integrity: We believe in honesty and transparency in all our dealings.</li>
            <li>Expertise: We stay up-to-date on the latest market trends and regulations.</li>
            <li>Client Focus: We prioritize your needs and goals throughout the process.</li>
            <li>Communication: We keep you informed and involved every step of the way.</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg">
            There are many real estate agents out there, so why choose us? Here
            are a few reasons:
          </p>
          <ol className="list-decimal list-inside">
            <li>Proven Track Record: We have a history of successful transactions.</li>
            <li>Personalized Service: We provide you with one-on-one attention.</li>
            <li>Strong Negotiation Skills: We will fight for the best deal on your behalf.</li>
            <li>Market Knowledge: We have a deep understanding of the local market.</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg">Contact us today to discuss your real estate needs!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/53e52ec0e4b0065548496158/1652116909603-8KOY8KLLPS30HPOULKJE/unsplash-image-rgJ1J8SDEAY.jpg"
              alt="mission"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">OUR MISSION</h3>
            <p className="text-lg text-center">
              To uphold the highest standards of professionalism, integrity, and
              quality of service while providing the best go-to personalized real
              estate service in Africa and beyond by establishing relationships
              that make our clients feel like partners.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://vaal.co.ke/wp-content/uploads/2023/01/shutterstock_318230726-2048x1983.webp"
              alt="vision"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">OUR VISION</h3>
            <p className="text-lg text-center">
              Broad-walk-Empire Real Estate aims to be Africa’s #1 gate to real
              estate. It is the right place for real estate investors who look for
              trust, stability, security and high returns. Through exemplary
              delivery time and service, transparency, and mutual trust, we aim to
              build long-term partnerships with our clients.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://vaal.co.ke/wp-content/uploads/2023/01/shutterstock_57862405-2048x1366.webp"
              alt="purpose"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">OUR PURPOSE</h3>
            <p className="text-lg text-center">
              Creating an enormous investment opportunity for investors from all
              over the world in the promising and skyrocketing real estate African
              market.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg">
            Founded in the year 2017, Broad-walk-Empire Real Estate is a preeminent
            Real Estate Developer with over 15 years of international experience,
            serving buyers of luxury property in Africa.​ The company was built with
            the African spirit in heart and mind, bringing along the vast expertise
            in real estate development from Turkey and the Middle East. Currently
            Broad-walk-Empire Real Estate has presence in Kenya, Ghana, Egypt,
            Turkey and the UK. We offer the African market a blend of modern
            architecture, unrivaled innovation, experience and market knowledge, the
            vision for industry leadership is uninterrupted. With our cutting-edge
            lifestyle brand, VAAL has set new benchmarks in the industry. We have
            built our reputation around providing impeccable customer service &
            satisfaction, professional advice and timely delivery. Trust is a
            cornerstone in the way we do business. We are a long-term oriented brand
            with a win-win strong mentality, belief and practice. Commitment to
            quality and achieving the best value for money for our clients, is our
            daily goal and what makes us stand out. Our culture places the consumer
            at the center, catering to local and international clientele alike by
            assessing each client’s individual needs before executing bespoke
            strategies towards fulfilling them. “Today we can confidently tell our
            customers to expect more when they work with Broad-walk-Empire Real
            Estate. The board and I have brought our combined experience to the
            table to construct over 1,000 high end apartments serving over 400
            clients.” Says the CEO, Lewis Karanu.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
