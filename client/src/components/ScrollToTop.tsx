import { useEffect } from "react";
import { useLocation, useSearch } from "wouter";

export default function ScrollToTop() {
  const [pathname] = useLocation();
  const search = useSearch();

  useEffect(() => {
    // Handle hash links (e.g., /faq#shipping or /shop?filter=rope#shop-products)
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      
      // Aggressive retry logic to find the element
      let attempts = 0;
      const maxAttempts = 20; // Try for 2 seconds
      
      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          // Found it! Scroll to it.
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < maxAttempts) {
          // Not found yet, try again in 100ms
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      
      // Start trying immediately
      tryScroll();
    } else {
      // Scroll to top on normal page navigation (only if no hash)
      window.scrollTo(0, 0);
    }
  }, [pathname, search, window.location.hash]);

  return null;
}
