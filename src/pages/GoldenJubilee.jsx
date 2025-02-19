import React from "react";
import DESELogoLeft from "../assets/DESELogoLeft.svg";
import IISCBuilding from "../assets/IISC main building svg.svg";

const goldenJubileeData = [
  {
    imgSrc: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/50-1.jpg",
    text: `The journey of Foundation of CEDT started with the Bhabha
            Committee which the Government of India had formed with Dr Homi
            Bhabha and a group of very distinguished scientists and
            technologists to recommend what should be done in the country in
            the next five years in order to make better use of electronics.
            As Electronics was becoming all-important, especially for
            national security, but we had done very little. It was pointed
            out that if we don’t take immediate measures we would be left in
            the lurch and others would score over us. Also, the electronics
            industry had to grow to bring in employment opportunities for
            our people, and we had to become self-sufficient.`,
  },
  {
    imgSrc: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/50-2.jpg",
    text: ` In 1970, the GOI organised a National Conference on Electronics
              at the Tata Institute of Fundamental Research, Bombay. The
              conference had a session on education, in which industry people
              told IISc Delegates that the knowledge imparted to students in
              classrooms was not suitable for their requirements, they wanted
              the students to develop something new. A visiting professor from
              the US, Prof Thomas Kailath suggested about Dr Arvind Shah who
              has also been talking of this, and planning similar things. As
              Similar problems were also arising in Switzerland because
              technology keeps changing so rapidly.`,
  },
  {
    imgSrc: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/50-3.jpg",
    text: `  Dr Shah contacted the Swiss Agency for Development and
              Cooperation [SDC], who could support the programme. And finally,
              the Governments of India and Switzerland signed an agreement in
              August 1974 to establish CEDT at the Institute. It was Prof BS
              Sonde who had done all the spadework on the Indian side and had
              made sure that IISc could administratively integrate the CEDT.
              Both of us had met with government officials in India and
              Switzerland. The Electronics Commission of the Government of
              India played an essential role in financing the CEDT on the
              Indian side. The CEDT had been allotted some space within the
              building of the ECE department. But this space, in May 1975,
              consisted only of a few empty rooms; the furniture for our
              future laboratories and offices was still in the process of
              being fabricated.`,
  },
  {
    imgSrc: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/50-4.jpg",
    text: `  BS Sonde, retired professor of electrical communication
              engineering, was the founding chair of the Centre for Electronics
              Design and Technology (CEDT). The first batch of 10 students
              arrived for their one-year Diploma programme in August 1975. We
              were indeed ready to receive them and to put them to work in our
              labs, which were just coming into shape. The 10 first students
              were all very dedicated and hardworking. We had set as a
              precondition that they should have a few years of professional
              experience and that their present employers should send them to
              the CEDT on deputation.`,
  },
  {
    imgSrc: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/DSC02375.jpg",
    text: `   In 1984, the programme was opened to non-sponsored students. The
              postgraduate Diploma Programme was replaced by an M. Tech. in
              Electronic Design and Technology in 1987. Research programmes
              leading to MSc (Engg) and Ph.D. were introduced in 1992. External
              registration for research programmes was introduced in 1995. ME
              in Microelectronics was introduced in 1997 as a joint programme
              between CEDT and Electrical Communication Engineering department.
              The centre by then had become a complete department within the
              division of Electrical Sciences of the Indian Institute of Science.`,
  },
];

const GoldenJubilee = () => {
  return (
    <div className="relative bg-[#0a192f] text-white min-h-screen flex flex-col items-center p-6">
      {/* Background Image */}
      <img
        src={IISCBuilding}
        alt="IISC Building"
        className="fixed w-full h-full object-contain object-center"
        style={{
          filter: "brightness(0) invert(1)",
          opacity: 0.25,
          zIndex: -1,
        }}
      />

      {/* Golden Jubilee Logo */}
      <div className="mb-16">
        <img
          src={DESELogoLeft}
          alt="DESE Logo"
          className="absolute top-25 left-20 transform -translate-x-1/2 -translate-y-1/2 h-[70px] md:h-[120px] transition-transform duration-300 hover:scale-110"
          style={{
            filter:
              "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%)",
          }}
        />
      </div>

      {/* Content Section */}
      <div className="space-y-10 w-full max-w-5xl">
        {goldenJubileeData.map((item, index) => (
          <div
            key={index}
            className={`bg-transparent rounded-lg shadow-lg p-6 flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center justify-start gap-6 transition-all duration-300 border-4 border-transparent hover:shadow-lg hover:shadow-blue-900/50 hover:scale-[1.02]`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={item.imgSrc}
                alt={`Container ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-center text-gray-300 md:text-left text-sm md:text-base">
              <p className="text-lg font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldenJubilee;
