/* eslint-disable react/display-name */
"use client";
import {
  title,
  subtitle,
  titleWrapper,
  sectionWrapper,
} from "@/components/primitives";
import { Chip } from "@nextui-org/chip";
// import { FeaturesGrid } from "@/components/features-grid";
// import landingContent from "@/content/landing";

export const About = () => {
  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-4" })}>
      <div className="flex flex-col gap-0 md:gap-8">
        <div>
        <div className="flex justify-center items-center text-cente mb-2">
          <Chip variant="flat" color="secondary">
            About
          </Chip>
        </div>
          <div className={titleWrapper({ class: "items-center" })}>
            <h1 className={title({ color: "yellow", size: "lg" })}>Some More About Us</h1>
          </div>
          <p
            className={subtitle({
              class:
                "flex flex-col mt-4 md:w-full text-center items-center gap-6",
            })}
          >
            <div>
              HorizonHacks is a beginner-friendly, absolutely free of cost hackathon for everyone. Hosted by Stem for Tomorrow, a 501(c)3 organization, HorizonHacks aims to solve problems plaguing our actual world. Our mission is to utilize STEM to bring new opportunities and solutions to global underprivaleged communities facing major problems. In fact, we will personally work with the winners of this hackathon to develop their products in applications and software that can make a real difference. We aim to create an experience that is available to everyone, so our hackathon is completely virtual, meaning you can join at any time from anywhere. For some motivation, we have prizes worth thousands of dollars, so work your hardest and make the best product you can.
            </div>
            <div>
              Although our event is called a &quot;hackathon,&quot; there is absolutely no requirement to be able to code. All participants have free reign over their projects and can use any of their many passions and skills to create a project with an equal chance of success. From physical creations, graphics, websites, algorithsm, games, and more, anything that you can think of in the realm of engineering is a viable option. In fact, during our event, we&apos;ll have experts hosting workshops to hone your skills as well as gaming sessions to serve as a break from your work.
            </div>
          </p>
        </div>
        {/* <FeaturesGrid features={landingContent.fullFeatures} /> */}
      </div>
    </section>
  );
};
