import { useEffect, useRef } from "react";

function UIIntersectionObserver({ rootId, onIntersec }) {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // observer.disconnect();
        onIntersec();
      }
    });

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={targetRef} id={rootId} />;
}

export default UIIntersectionObserver;
