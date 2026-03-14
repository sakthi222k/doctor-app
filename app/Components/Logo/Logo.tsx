"use client"
import styles from "@/app/Components/Logo/logo.module.css"
import Image from "next/image";
import { useRef,useEffect } from "react";

export default function Logo() {
  const sliderRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
       if (!sliderRef.current) return;
      const slider = sliderRef.current;
      
        const CARD_WIDTH = 222;
  
       let index = 0; // Keeps track of current slide
  
       function slide() {
         index++;
         slider.style.transform = `translateX(-${index * CARD_WIDTH}px)`;
  
         // If last real slide → reset to beginning smoothly
         if (index === 6) {
           setTimeout(() => {
             slider.style.transition = "none"; // remove animation
             slider.style.transform = "translateX(0px)";
             index = 0;
  
             // Re-enable animation after reset
             setTimeout(() => {
               slider.style.transition = "transform 2.2s ease-in-out";
             }, 50);
           }, 2200); // wait for slide animation to finish
         }
       }
  
       // Slide every 1.7 seconds (1 sec stop + 0.7 sec animation)
       const interval = setInterval(slide, 3200);
  
       return () => clearInterval(interval);
    }, []);
  
  const sliderRef1 = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
       if (!sliderRef1.current) return;
      const slider1 = sliderRef1.current;
      
        const CARD_WIDTH = 236.7;
  
       let index = 0; // Keeps track of current slide
  
       function slide() {
         index++;
         slider1.style.transform = `translateX(-${index * CARD_WIDTH}px)`;
  
         // If last real slide → reset to beginning smoothly
         if (index === 6) {
           setTimeout(() => {
             slider1.style.transition = "none"; // remove animation
             slider1.style.transform = "translateX(0px)";
             index = 0;
  
             // Re-enable animation after reset
             setTimeout(() => {
               slider1.style.transition = "transform 2.2s ease-in-out";
             }, 50);
           }, 2200); // wait for slide animation to finish
         }
       }
  
       // Slide every 1.7 seconds (1 sec stop + 0.7 sec animation)
       const interval = setInterval(slide, 3200);
  
       return () => clearInterval(interval);
    }, []);
   useEffect(() => {
     // Reset slider position when page/component is mounted
     const track = document.querySelector(
       ".reviewLogoContainer"
     ) as HTMLElement | null;
     if (track) {
       track.style.transition = "none"; // remove animation for reset
       track.style.transform = "translateX(0)"; // go back to first slide
     }

     // Re-enable animation after a small delay
     const timer = setTimeout(() => {
       if (track) {
         track.style.transition = "transform 2.2s ease-in-out";
       }
     }, 50);

     return () => clearTimeout(timer);
   }, []);
    return (
      <div className={styles.reviewLogo}>
        <div className={styles.reviewLogoContainer} ref={sliderRef}>
          <div className={styles.IogoImage}>
            <Image src="/Images/001.png" alt="icon" width={98} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/02.png" alt="icon" width={130} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/03.png" alt="icon" width={146} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/04.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/05.png" alt="icon" width={107} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/06.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/001.png" alt="icon" width={98} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/02.png" alt="icon" width={130} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/03.png" alt="icon" width={146} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/04.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/05.png" alt="icon" width={107} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/06.png" alt="icon" width={140} height={122} />
          </div>
        </div>
        <div className={styles.reviewLogoContainer1} ref={sliderRef1}>
          <div className={styles.IogoImage}>
            <Image src="/Images/001.png" alt="icon" width={98} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/02.png" alt="icon" width={130} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/03.png" alt="icon" width={146} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/04.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/05.png" alt="icon" width={107} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/06.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/001.png" alt="icon" width={98} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/02.png" alt="icon" width={130} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/03.png" alt="icon" width={146} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/04.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/05.png" alt="icon" width={107} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/06.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/001.png" alt="icon" width={98} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/02.png" alt="icon" width={130} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/03.png" alt="icon" width={146} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/04.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/05.png" alt="icon" width={107} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/06.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/001.png" alt="icon" width={98} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/02.png" alt="icon" width={130} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/03.png" alt="icon" width={146} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/04.png" alt="icon" width={140} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/05.png" alt="icon" width={107} height={122} />
          </div>
          <div className={styles.IogoImage}>
            <Image src="/Images/06.png" alt="icon" width={140} height={122} />
          </div>
        </div>
      </div>
    );
}