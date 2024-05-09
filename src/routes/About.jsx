import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <div className="about">
        <h1>
          <b>About Us</b>
        </h1>

        <p>
          We are a passionate team of real estate professionals dedicated to
          helping you find your dream home or sell your current property for the
          best possible price.<br></br> With extensive experience in the local
          market, we have the knowledge and expertise to guide you through every
          step of the real estate process.
        </p>
        <br></br>
        <br></br>

        <h1>
          <b>Our Values</b>
        </h1>

        <ol>
          <li>
            Integrity: We believe in honesty and transparency in all our
            dealings.
          </li>
          <li>
            Expertise: We stay up-to-date on the latest market trends and
            regulations.
          </li>
          <li>
            Client Focus: We prioritize your needs and goals throughout the
            process.
          </li>
          <li>
            Communication: We keep you informed and involved every step of the
            way.
          </li>
        </ol>
        <br></br>
        <br></br>
        <h2>Why Choose Us?</h2>

        <p>
          There are many real estate agents out there, so why choose us? Here
          are a few reasons:
        </p>
        <ol>
          <li>
            Proven Track Record: We have a history of successful transactions.
          </li>
          <li>
            Personalized Service: We provide you with one-on-one attention.
          </li>
          <li>
            Strong Negotiation Skills: We will fight for the best deal on your
            behalf.
          </li>
          <li>
            Market Knowledge: We have a deep understanding of the local market.
          </li>
        </ol>
        <br></br>
        <br></br>
        <h2>Meet Our Team</h2>

        <p>Contact us today to discuss your real estate needs!</p>
      </div>

      <NavBar />
      <h1>About</h1>
      <br></br>
      <div className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full">
        <h4 className="font-bold text-xl"> Company History:</h4>
      </div>
      <br></br>

      <div class="grid grid-cols-3 gap-4">
        <div class="flex w-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/53e52ec0e4b0065548496158/1652116909603-8KOY8KLLPS30HPOULKJE/unsplash-image-rgJ1J8SDEAY.jpg"
            alt="mission"
            className="w-full h-[250px]"
          />
          <p class="text-left">
            <h1>
              <p class="truncate ...">
                <b>OUR MISSION</b>
              </p>
              <hr></hr>
            </h1>
            <br></br>
            To uphold the highest standards of professionalism, integrity, and
            quality of service while providing the best go-to personalized real
            estate service in Africa and beyond by establishing relationships
            that make our clients feel like partners.
          </p>
        </div>
        <span class="inline-block align-bottom ..."></span>

        <div class="flex w-full">
          <img
            src="https://vaal.co.ke/wp-content/uploads/2023/01/shutterstock_318230726-2048x1983.webp"
            alt="mission"
            className="w-full h-[250px]"
          />
          <p class="text-left">
            <h1>
              <p class="truncate ...">
                <b>OUR VISION</b>
              </p>
              <hr></hr>
            </h1>
            <br></br>
            Broad-walk-Empire Real Estate aims to be Africa’s #1 gate to real
            estate. It is the right place for real estate investors who look for
            trust, stability, security and high returns. Through exemplary
            delivery time and service, transparency, and mutual trust, we aim to
            build long-term partnerships with our clients.
          </p>
        </div>
        <br></br>

        <br></br>
        <div class="flex w-full">
          <img
            src="https://vaal.co.ke/wp-content/uploads/2023/01/shutterstock_57862405-2048x1366.webp"
            alt="mission"
            className="w-full h-[250px]"
          />

          <p class="text-left">
            <h1>
              <p class="truncate ...">
                <b>OUR PURPOSE</b>
              </p>
              <hr></hr>
              <br></br>
            </h1>
            Creating an enormous investment opportunity for investors from all
            over the world in the promising and skyrocketing real estate African
            market.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <p class="indent-8">
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
        daily goal and what makes us stand out.Our culture places the consumer
        at the center, catering to local and international clientele alike by
        assessing each client’s individual needs before executing bespoke
        strategies towards fulfilling them. “Today we can confidently tell our
        customers to expect more when they work with Broad-walk-Empire Real
        Estate. The board and I have brought our combined experience to the
        table to construct over 1,000 high end apartments serving over 400
        clients.” Says the CEO, Lewis Karanu.
      </p>
    </>
  );
}

export default About;

