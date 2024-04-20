import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ArrowCircleUp } from "@phosphor-icons/react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const threshold = 0.3 * totalHeight;

      if (window.scrollY > threshold) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    goToTopInstant();
  }, [location]);

  const goToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToTopInstant = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="fixed bottom-8 right-4 z-50 cursor-pointer">
      {showTopBtn ? (
        <ArrowCircleUp
          onClick={goToTopSmooth}
          size={56}
          weight="fill"
          className="rounded-full bg-light-blue"
        />
      ) : null}
    </div>
  );
};

export default ScrollToTop;
