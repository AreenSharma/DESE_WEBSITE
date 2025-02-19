<div className="mt-20 max-w-6x1 mx-auto px-4"></div>;
import {
  RiCalendarEventLine,
  RiMapPinLine,
  RiTeamLine,
  RiMedalLine,
} from "@remixicon/react";
import DESELogoLeft from "../assets/DESELogoLeft.svg";
import Anniv50 from "../assets/Anniv50.svg";
import OpenDaySvg from "../assets/Open Day LOGO White.svg";
import FloatingShape from "../components/FloatingShape";
import IISCBuilding from "../assets/IISC main building svg.svg";
import CountdownTimer from "../components/Timer";
import Button from "../components/Button";
import Gallery from "../components/Gallary";
import Event from "../components/Event";
import gsap from "gsap";
import Sponsors from "../components/Sponsers";
import Team from "../components/Team";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";
import DeseLogo from "../assets/DeseLogo.svg";
import EventTimeline from "../components/EventTimeline";
import ScrollToTopButton from "../components/Scrolltotopbutton";

const Home = () => {
  return (
    <>
      <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">
        <div className="fixed z-[-1] inset-0 bg-[#030418]/50">
          <img
            src={IISCBuilding}
            alt="IISC Building"
            className="fixed w-full h-full object-contain object-center"
            style={{
              filter: "brightness(0) invert(1)",
              opacity: 0.25, 
            }}
          />
        </div>

        <div id="hero" className="relative min-h-screen">
          <FloatingShape />

          {/* IISC Logo (Top Right) */}
          <img
            src={IISCMasterSealBlack}
            alt="IISC Logo"
            className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 h-[50px] sm:h-[70px] md:h-[120px] transition-all duration-300 hover:scale-110 hover:brightness-125"
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />

          {/* DESE Logo (Top Left) */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8">
            <img
              src={DESELogoLeft}
              alt="DESE Logo"
              className="h-[50px] sm:h-[70px] md:h-[120px] transition-all duration-300 hover:scale-110 hover:brightness-125"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8">
            <div className="relative flex flex-col items-center">
              <div className="animate-fade-in-up animate-duration-1000 animate-ease-in-out">
                <img
                  src={OpenDaySvg}
                  alt="Open Day Logo"
                  className="h-[150px] sm:h-[200px] md:h-[250px] mb-8 transform transition-all duration-300 hover:scale-110 hover:brightness-125"
                />
              </div>
            </div>
            <div
              className="absolute bottom-8 animate-bounce animate-infinite animate-duration-2000 animate-ease-in-out cursor-pointer group"
              onClick={() => {
                const nextSection = document.getElementById("event-highlights");
                nextSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center bg-clip-text bg-gradient-to-r from-white to-blue-400 text-transparent">
                1st MARCH, 2025 | 9AM-5PM
              </h2>

              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-white group-hover:text-blue-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* About DESE Section */}
        <div id="about-dese" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
              About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed bg-[#0a0b2e]/80 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg hover:border-white/30 hover:shadow-blue-500/20 transition-all duration-300">
                  IISc's Open Day is an annual event when the Institute opens
                  its doors for the general public to visit, learn, question,
                  and understand various technological projects and research
                  that is going on. It's designed to inspire scientific
                  curiosity in people of all ages. On this day, the institute
                  opens its doors to the public, offering a glimpse into
                  cutting-edge research and innovations. DESE (formerly known as
                  CEDT) gladly invites students, professors, lecturers from
                  various academic institutions, and professionals from the
                  industry. We look forward to seeing you!
                </p>
              </div>
              <div className="relative group">
                <div className="absolute rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-1 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div
          id="countdown"
          className="relative py-12 sm:py-16 md:py-32 overflow-hidden flex justify-center items-center"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/src/assets/circuit-pattern.svg')] opacity-5"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
            <CountdownTimer />
          </div>
        </div>

        {/* Events Section */}
        <div id="Events" className="events-section">
          <Event />
        </div>
        <EventTimeline />

        {/* Research Section */}
        <div id="research" className="relative py-12 sm:py-16 md:py-32 px-4 sm:px-6 md:px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/src/assets/circuit-pattern.svg')] opacity-5"></div>
          </div>
          <div className="relative z-10 max-w-8xl mx-auto"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-text-glow">
              Research Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Signal Processing",
                  description:
                    "Advanced algorithms for signal analysis and processing",
                  icon: "ri-radar-line",
                },
                {
                  title: "Embedded Systems",
                  description:
                    "Design and development of efficient embedded solutions",
                  icon: "ri-cpu-line",
                },
                {
                  title: "VLSI Design",
                  description:
                    "Cutting-edge research in VLSI architecture and design",
                  icon: "ri-chip-line",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-[#0a0b2e]/80 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <i
                      className={`${item.icon} text-3xl sm:text-4xl mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300`}
                    ></i>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              "https://res.cloudinary.com/dosnuagvu/image/upload/v1739553511/Images_in_about_us_p1_b9avno.jpg",
              "https://res.cloudinary.com/dosnuagvu/image/upload/v1739553515/Images_in_about_us_p2_jsvalz.jpg",
              "https://res.cloudinary.com/dosnuagvu/image/upload/v1739553519/Images_in_about_us_p4_oh1yqx.jpg"
            ].map((src, index) => (
              <div key={index} className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-lg w-full h-48 sm:h-64 md:h-72 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="team">
          <Team />
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
            Locate Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-[#0a0b2e]/80 p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            {/* Map Section */}
            <div className="h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transform hover:scale-[1.02] transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.225201201201!2d77.565123315304!3d13.0212019908201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d9b4f1f7d5%3A0x1b8e8b0b0b0b0b0b!2sDepartment%20of%20Electronic%20Systems%20Engineering%2C%20Indian%20Institute%20of%20Science!5e0!3m2!1sen!2sin!4v1629999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Location Details */}
            <div id="location">
              <div className="space-y-4 text-white">
                {[
                  {
                    title: "When",
                    icon: "ri-calendar-line",
                    content: "1st March, 2025"
                  },
                  {
                    title: "Where",
                    icon: "ri-map-pin-line",
                    content: `Department of Electronic Systems,
                    INDIAN INSTITUTE OF SCIENCE,
                    Mathikere, Bengaluru,
                    Karnataka 560012`
                  },
                  {
                    title: "How to get there",
                    icon: "ri-directions-line",
                    content: "IISc is often locally referred to as the Tata Institute. It is better to use the name Tata Institute with the taxi, auto-rickshaw drivers, and bus conductors. Inside the institute, we have enough banners for directions to reach our department DESE."
                  },
                  {
                    title: "A Note from the Chair",
                    icon: "ri-quill-pen-line",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem dolore vero fugiat quia quisquam pariatur laborum laudantium iste, laboriosam sapiente nam nesciunt quo reiciendis eligendi, quae, cupiditate ex possimus saepe id officia."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 sm:p-6 bg-[#0a0b2e] rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:scale-[1.01]">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-blue-300">
                      <i className={`${item.icon} text-blue-400`}></i>
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

          {/* Sponsors Section */}
          <div id="sponsors-section" className="mt-8 sm:mt-10 md:mt-12">
            <Sponsors />
          </div>
      
        <ScrollToTopButton/>
      </div>
      
    </>
  );
};

export default Home;
