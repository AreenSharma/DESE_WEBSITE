import React, { useState, useEffect } from "react";
import { RiArrowUpSLine } from "@remixicon/react"; 

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#3329b9] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-[9999] ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hover:opacity-70 active:opacity-80`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <RiArrowUpSLine className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;
