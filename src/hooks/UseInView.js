// src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

export default function useInView(options = { threshold: 0.2, root: null, rootMargin: "0px" }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target); // solo se anima una vez
          }
        });
      },
      options
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return { ref, isInView };
}
