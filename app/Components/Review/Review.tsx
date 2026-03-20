"use client";
import styles from "@/app/Components/Review/review.module.css";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useEffect, useRef } from "react";

export default function Review() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
     if (!sliderRef.current) return;
    const slider = sliderRef.current;
    
      const CARD_WIDTH = 545;

     let index = 0; // Keeps track of current slide

     function slide() {
       index++;
       slider.style.transform = `translateX(-${index * CARD_WIDTH}px)`;

       // If last real slide → reset to beginning smoothly
       if (index === 3) {
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
    
       const CARD_WIDTH = 493;
    
     let index = 0; // Keeps track of current slide

     function slide() {
       index++;
       slider1.style.transform = `translateX(-${index * CARD_WIDTH}px)`;

       // If last real slide → reset to beginning smoothly
       if (index === 3) {
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
    const track = document.querySelector(".sliderTrack") as HTMLElement | null;
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
    <>
      <div className={styles.reviewUpper}>
        <div className={styles.reviewBox}>
          <div className={styles.reviewContanier}>
            <div className={styles.iconImageContainer}>
              <Image
                className={styles.iconImage}
                src="/Images/icon-1.png"
                alt="icon"
                width={51}
                height={51}
              />
            </div>
            <div className={styles.iconTextContainer}>
              <h1 className={styles.h1}>38K</h1>
              <p className={styles.paraTag}>Satisfied Patients</p>
            </div>
          </div>
          <div className={styles.reviewContanier}>
            <div className={styles.iconImageContainer}>
              <Image
                className={styles.iconImage}
                src="/Images/icon-2.png"
                alt="icon"
                width={51}
                height={51}
              />
            </div>
            <div className={styles.iconTextContainer}>
              <h1 className={styles.h1}>420</h1>
              <p className={styles.paraTag}>Clinic Rooms</p>
            </div>
          </div>
          <div className={styles.reviewContanier}>
            <div className={styles.iconImageContainer}>
              <Image
                className={styles.iconImage}
                src="/Images/icon-3.png"
                alt="icon"
                width={51}
                height={51}
              />
            </div>
            <div className={styles.iconTextContainer}>
              <h1 className={styles.h1}>32+</h1>
              <p className={styles.paraTag}>Awards Winning</p>
            </div>
          </div>
          <div className={styles.reviewContanier}>
            <div className={styles.iconImageContainer}>
              <Image
                className={styles.iconImage}
                src="/Images/icon-4.png"
                alt="icon"
                width={51}
                height={51}
              />
            </div>
            <div className={styles.iconTextContainer}>
              <h1 className={styles.h1}>563K</h1>
              <p className={styles.paraTag}>Kinds Of Research</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ReviewSection}>
        <div className={styles.subReviewSection}>
          <div className={styles.ReviewFlexContainer}>
            <div>
              <Image
                className={styles.doctorGirlImage}
                src="/Images/doctorGirl.png"
                alt="Doctor"
                width={442}
                height={641}
              />
              <Image
                className={styles.doctorGirlImage1}
                src="/Images/doctorGirl.png"
                alt="Doctor"
                width={470}
                height={681}
              />
            </div>
            <div className={styles.clientBOx}>
              <p className={styles.reviewTestimonialText}>OUR TESTIMONIAL</p>
              <h1 className={styles.reviewHeaderText}>
                Our Real Story of Clients
              </h1>
              <div className={styles.clientContainer}>
                <div className={styles.clipWrapper}>
                  <div className={styles.sliderTrack} ref={sliderRef}>
                    {/* ref={sliderRef} */}
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-2.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctors went above and beyond to ensure I
                        received best possible treatment. I am Grateful for
                        their dedication & would trust them with my health any
                        day.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Priya Sharma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Software Engineer
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-1.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctor provided exceptional care and patiently
                        explained every detail. I felt truly supported
                        throughout the treatment and highly appreciate their
                        expertise.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Rahul Verma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Marketing Executive
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-3.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;I am extremely satisfied with the doctor’s
                        professionalism. Their calm approach and timely
                        diagnosis helped me recover faster than expected. Highly
                        recommended.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Arjun Rao</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Entrepreneur
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-2.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctors went above and beyond to ensure I
                        received best possible treatment. I am Grateful for
                        their dedication & would trust them with my health any
                        day.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Priya Sharma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Software Engineer
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-1.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctor provided exceptional care and patiently
                        explained every detail. I felt truly supported
                        throughout the treatment and highly appreciate their
                        expertise.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Rahul Verma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Marketing Executive
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-3.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;I am extremely satisfied with the doctor’s
                        professionalism. Their calm approach and timely
                        diagnosis helped me recover faster than expected. Highly
                        recommended.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Arjun Rao</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Entrepreneur
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.clipWrapper1}>
                  <div className={styles.sliderTrack} ref={sliderRef1}>
                    {/* ref={sliderRef} */}
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-2.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctors went above and beyond to ensure I
                        received best possible treatment. I am Grateful for
                        their dedication & would trust them with my health any
                        day.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Priya Sharma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Software Engineer
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-1.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctor provided exceptional care and patiently
                        explained every detail. I felt truly supported
                        throughout the treatment and highly appreciate their
                        expertise.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Rahul Verma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Marketing Executive
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-3.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;I am extremely satisfied with the doctor’s
                        professionalism. Their calm approach and timely
                        diagnosis helped me recover faster than expected. Highly
                        recommended.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Arjun Rao</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Entrepreneur
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-2.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctors went above and beyond to ensure I
                        received best possible treatment. I am Grateful for
                        their dedication & would trust them with my health any
                        day.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Priya Sharma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Software Engineer
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-1.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctor provided exceptional care and patiently
                        explained every detail. I felt truly supported
                        throughout the treatment and highly appreciate their
                        expertise.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Rahul Verma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Marketing Executive
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-3.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;I am extremely satisfied with the doctor’s
                        professionalism. Their calm approach and timely
                        diagnosis helped me recover faster than expected. Highly
                        recommended.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Arjun Rao</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Entrepreneur
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-2.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctors went above and beyond to ensure I
                        received best possible treatment. I am Grateful for
                        their dedication & would trust them with my health any
                        day.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Priya Sharma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Software Engineer
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-1.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;The doctor provided exceptional care and patiently
                        explained every detail. I felt truly supported
                        throughout the treatment and highly appreciate their
                        expertise.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Rahul Verma</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Marketing Executive
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className={styles.clientSubContainer}>
                      <div className={styles.clientContainerImage}>
                        <Image
                          className={styles.clientImage1}
                          src="/Images/client-3.jpg"
                          alt="Doctor"
                          width={97}
                          height={101}
                        />
                        <Stack spacing={1}>
                          <Rating
                            name="size-medium"
                            defaultValue={5}
                            size="medium"
                            style={{ color: "#02c9b8" }}
                          />
                        </Stack>
                      </div>
                      <p className={styles.clientPara}>
                        &quot;I am extremely satisfied with the doctor’s
                        professionalism. Their calm approach and timely
                        diagnosis helped me recover faster than expected. Highly
                        recommended.&quot;
                      </p>
                      <div className={styles.clientContainerComments}>
                        <div>
                          <h5 style={{ fontSize: "18px" }}>Arjun Rao</h5>
                          <p style={{ fontSize: "18px", color: " #4b5563" }}>
                            Entrepreneur
                          </p>
                        </div>
                        <Image
                          className={styles.doctorImage1}
                          src="/Images/01.svg"
                          alt="Doctor"
                          width={58}
                          height={58}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
