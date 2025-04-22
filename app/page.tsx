import AnimatedSection  from "@/components/AnimatedSection";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
      <main>
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-amber-900 text-2xl">
              Web Developer
            </span>
            <h1 className="hero-h1 mb-6">
              Hello I  am<br/><span className="text-amber-100"> Ipseeka Malla</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">I am passionate at building dynamic web application,expertise in various programming langauge.</p>
              <div>
                <Button variant="outline" size="lg"
                className="upppercase flex items-center gap-2"><span>Download Resume</span>
                <FiDownload className="text-xl"/></Button>
              </div>
          </div>
          <div>photo</div>
        </div>
        






<AnimatedSection id="contact">
  <h1 className="text-9xl">Contact</h1>
</AnimatedSection>

<AnimatedSection id="resume">
  <h1 className="text-9xl">Resume</h1>
</AnimatedSection>

<AnimatedSection id="about">
  <h1 className="text-9xl">About</h1>
</AnimatedSection>
</main>
      </div>
  
      
    </div>
  );
}
