"use client";

import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimations } = useTextRevealAnimation();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if(inView){
      entranceAnimations();
    }
  },[inView,entranceAnimations]);
  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={sectionRef}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%" ref={scope}>Building beautiful websites with clean code and thoughful design to help your buisness grow and stand out online</h2>
      </div>
    </section>
  );
};

export default Intro;


//01:21:14 video
// completion time