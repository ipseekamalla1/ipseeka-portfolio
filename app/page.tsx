import AnimatedSection  from "@/components/AnimatedSection";


export default function Home() {
  return (
    <div>
  
      <main>






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
  );
}
