import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       setTimeout(() => {
//         const el = document.getElementById(hash.replace("#", ""));
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//       }, 0);
//     } else {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [pathname, hash]);

//   return null;
// };
// export default ScrollToTop;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Only smooth scroll for hash links (footer links)
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Instantly jump to top for normal navigation (header links)
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;