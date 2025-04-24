'use client'
import AnimatedSection from "@/components/AnimatedSection";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo"
import Stats from "@/components/Stats";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <main>
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-amber-900 text-2xl">Web Developer</span>
              <h1 className="hero-h1 mb-6">
                Hello I am
                <br />
                <span className="text-amber-100"> Ipseeka Malla</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am passionate at building dynamic web application,expertise in
                various programming langauge.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="upppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                <Social
  containerStyles="flex gap-6"
  iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-white hover:text-black transition-all duration-500"
/>

                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none xl:pt-8 xl:pb-24"><Photo/></div>
          </div>

          
            <Stats/>
          

            <AnimatedSection id="resume">
            <Resume/>
          </AnimatedSection>
          <AnimatedSection id="projects">
  <div className="border-t border-gray-700 px-6 py-10">
    <div className="lg:w-400 md:w-200 sm:w-100 max-w-4xl mx-auto">
      <ProjectSection />
    </div>
  </div>
</AnimatedSection>
          <AnimatedSection id="contact">
            <Contact/>
          </AnimatedSection>

          

        
        </main>
      </div>
    </div>
  );
}
