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
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // <-- increased delay
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // <-- increased delay
    }
  }, [pathname, hash]);

  return null;
};
export default ScrollToTop;