import React, { useState, useEffect } from "react";
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
import { RiArrowUpSLine } from "@remixicon/react";
import MainGallary from "../components/MainGallary.jsx";
import chair from "../assets/ChairMan.jpg";
import { useNavigate, useLocation } from "react-router-dom"; // Import necessary hooks

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const location = useLocation(); // Initialize location

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsVisible(offset > 100); // Show button after scrolling down 100px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (item) => {
    if (item.isPage) {
      navigate(item.href);
      if (item.href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const sectionId = item.href.replace("#", "");
      const section = document.getElementById(sectionId);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } else if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveLink(item.name);
    setIsMenuOpen(false);
  };

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

          {/* Back to Top Button */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-10 text-2xl right-10 z-50 bg-[#2E2388] text-white p-5 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <RiArrowUpSLine className="w-8 h-8 " />
            </button>
          )}

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
                filter:
                  "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%)",
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
                const nextSection = document.getElementById("demos");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  console.error("Demos section not found");
                }
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
        <div
          id="about-dese"
          className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFA500]">
                Step Into the Future with DESE!
              </span>
            </h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-8 md:space-y-0">
              {/* Text Section - 40% */}
              <div className="w-full md:w-2/5 text-center md:text-left">
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed p-3 sm:p-4 rounded-xl shadow-lg hover:border-white/30 transition-all duration-300 font-semibold ">
                  {/* DESE (formerly known as CEDT) invites students. */}
                </p>
                <p
                  className="text-base sm:text-lg text-gray-200 leading-relaxed p-3 sm:p-4 rounded-xl shadow-lg hover:border-white/30 transition-all duration-300 font-semibold Amasis MT Pro "
                  style={{ fontFamily: "Amasis MT Pro, sans-serif" }}
                >
                  IISc's Open Day is an annual event when the Institute opens
                  its doors for the public to visit, learn, and understand
                  various technological projects and research. DESE (formerly
                  known as CEDT) invites students, professors, and professionals
                  from the industry. We look forward to seeing you!
                </p>
              </div>

              {/* Gallery Section - 60% */}
              <div className="relative group w-3/5">
                <div className="absolute rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-1 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-100">
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demos Section */}
        <div
          id="demos"
          className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#0a0b2e]/50 backdrop-blur-sm rounded-lg shadow-lg"
        >
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
              Experience Innovation Up Close!
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 px-4 sm:px-0">
              Dive into a showcase of exciting projects and live demonstrations
              that highlight creativity, technology, and problem-solving in
              action. Witness how ideas come to life and inspire the future!
            </p>
            <Button
              onClick={() => {
                handleNavClick({ href: "/demo", isPage: true }); // Fixed href to match the correct route
              }}
              variant="accent"
              className="py-1 px-2"
            >
              Go to Demos page
            </Button>
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

        {/* Gallery Section */}
        <MainGallary />

        {/* A Note from the Chair Section */}
        <div className="mt-12 mb-20 z-10 sm:mt-16 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative  p-8 sm:p-12 rounded-3xl shadow-2xl hover:shadow-[0_8px_30px_rgba(125,67,255,0.3)] transition-all duration-500">
            <div className="absolute inset-0 border border-white/10 rounded-3xl backdrop-blur-lg"></div>

            <h2 className="text-3xl sm:text-4xl relative z-100 font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-400 animate-text-shimmer">
              Message from the Chair
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative">
              <div className="group relative w-full lg:w-2/5">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={chair}
                  alt="Chairperson"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl ring-4 ring-white/10 transform transition-all duration-500 group-hover:scale-102 group-hover:ring-purple-300/30"
                />
              </div>

              <div className="flex-1 space-y-6 text-white relative">
                <svg
                  className="absolute -top-6 -left-6 w-16 h-16 text-purple-300/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.921c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.921c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                </svg>

                <p className="text-lg sm:text-xl leading-relaxed font-medium text-gray-200 text-center lg:text-left italic">
                  "A warm welcome to the OPEN DAY event. The department is 51
                  years old. For over half a century, we have been a beacon in
                  electronic systems. This open day, we open our doors to share
                  with you the exciting work we are doing and the bright future
                  that we are building. We showcase our students' talents,
                  faculty's expertise, and cutting-edge research happening in
                  the department. It is a testament to the dedication of
                  generations of faculty, the brilliance of our students, and
                  the unwavering support of our alumni. You may find a few
                  pleasant surprises this time. Visit us and get inspired."
                </p>

                <div className="text-right mt-8">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
                    Prof.  L.Umanand
                  </h3>
                  <p className="text-sm text-purple-200/80">Chair, DESE</p>
                </div>
              </div>
            </div>
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
            <iframe src="https://www.google.com/maps/d/embed?mid=1Hl9k9RLdt2HId0_c2at1qykVd-WWKrE&ehbc=2E312F" 
            width="100%" 
            height="100%"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            className='rounded-lg'
            title='IISc Location'
            >
            </iframe>
            </div>


            {/* Location Details */}
            <div id="location">
              <div className="space-y-4 text-white">
                {[
                  {
                    title: "When",
                    icon: "ri-calendar-line",
                    content: "1st March, 2025",
                  },
                  {
                    title: "Where",
                    icon: "ri-map-pin-line",
                    content: `Department of Electronic Systems,
                    INDIAN INSTITUTE OF SCIENCE,
                    Mathikere, Bengaluru,
                    Karnataka 560012`,
                  },
                  {
                    title: "How to get there",
                    icon: "ri-directions-line",
                    content:
                      "IISc is often locally referred to as the Tata Institute. It is better to use the name Tata Institute with the taxi, auto-rickshaw drivers, and bus conductors. Inside the institute, we have enough banners for directions to reach our department DESE.",
                  },
                ].map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-center text-blue-300">
                      <i className={`${item.icon} text-blue-400`}></i>
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 whitespace-pre-line text-center">
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
      </div>
    </>
  );
};

export default Home;
