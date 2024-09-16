import React from "react";
import "./About.css";
import Navigation from "../../components/Navbar";

const About = () => {
  return (
    <div className="pt-20">
      <AboutHero />
      <AboutTwo />
      <AboutMeet />
      <AboutJoin />
    </div>
  );
};

const AboutHero = () => {
  return (
    <section
      className="bg-cover bg-center text-center py-20 aboutSection"
      style={{
        backgroundImage: `url('/about/aboutbg.png')`,
        minHeight: "70vh", // Replaces fixed height
        paddingTop: "100px",
        marginTop: "-80px",
      }}
    >
      <div className="text-white" style={{ marginTop: "7%" }}>
        <h1 className="text-2xl md:text-3xl font-normal mb-4 xl:text-4xl aboutText">
          Innovative solutions from concept to completion
        </h1>
        <p className="text-base md:text-lg my-8 px-8">
          Digitally transform your business and online presence with our
          solutions
        </p>
      </div>
    </section>
  );
};

const AboutTwo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-20 bg-white shadow-md">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 lg:pr-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          About Trulance
        </h2>
        <p className="text-black mb-2">
          <span className="text-blue-600">Tru</span>
          <span className="text-green-500">lance</span> is your go-to partner
          for comprehensive digital solutions. We are a dedicated team
          specializing in:
          <span className="text-blue-900">
            {" "}
            Web development, Data Analysis, Content Creation, Digital Marketing
          </span>
        </p>
        <p className="text-black mt-4">
          Our goal is to help businesses thrive in the digital landscape by
          providing tailor-made services that drive results and capture
          attention.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
        <img
          src="/about/suit.png"
          alt="About Trulance"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>
    </div>
  );
};

const AboutMeet = () => {
  // Reordered TEAM MEMBERS
  const teamMembers = [
    {
      name: "Wuni Daniels",
      role: "Digital Marketing Lead",
      image: "./about/wunidaniels.jpg", // Replace with actual path
    },
    {
      name: "Esther Oyebode",
      role: "Product Design Lead",
      image: "./about/estheroyebode.jpg", // Replace with actual path
    },
    {
      name: "Jonathan Oyekanmi",
      role: "Content Creation Lead",
      image: "./about/jonathanoyekanmi.JPG", // Replace with actual path
    },
    {
      name: "Opeyemi Bioku",
      role: "Web Development Lead",
      image: "./about/opeyemi.png", // Replace with actual path
    },
    {
      name: "Daniel Ajayi",
      role: "Data Analyst",
      image: "./about/daniel.jpg", // Replace with actual path
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
        Meet the Trulancers
      </h1>
      <div className="flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:flex-wrap md:justify-center gap-6">
        {/* Team members here */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-full md:w-80"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg object-cover w-full h-80 md:h-96"
            />
            <div className="absolute bottom-4 mb-4 bg-white rounded-lg text-center p-2 w-4/5 text-gray-900">
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutJoin = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-blue-900 mb-4">
          Want to join the team?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6 md:px-10 px-5">
          Trulance.io (Trulance) is a rapidly growing freelance platform
          connecting talented individuals like you with project opportunities
          from innovative Tech MSMEs and Startups. Whether you’re{" "}
          <span className="font-bold text-blue-800">
            a seasoned developer, a data whiz, a creative mastermind, or a
            digital marketing guru,
          </span>{" "}
          Trulance offers a platform to showcase your expertise and contribute
          to cutting-edge projects.
        </p>
        <button className="bg-blue-700 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-800 hover:scale-105 transition-transform duration-300">
          Join now
        </button>
      </div>
    </div>
  );
};

export default About;
