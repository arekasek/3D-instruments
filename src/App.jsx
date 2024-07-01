import "./index.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Piano from "./3d";
export default function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slide", {
        xPercent: -100,
        duration: 2,
        ease: "power3.out",
      })
        .from(["#text-1", "#text-2"], {
          opacity: 0,
          duration: 2,
          ease: "power3.out",
          stagger: 1,
        })
        .to("#intro-slide", {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="overflow-hidden" ref={comp}>
      <Piano />
    </div>
  );
}
