import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Cambridge from "@/components/sections/Cambridge";
import Results from "@/components/sections/Results";
import Teaching from "@/components/sections/Teaching";
import Qualifications from "@/components/sections/Qualifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="lg:flex lg:justify-between lg:gap-16">
        <Sidebar />
        <main className="pb-24 pt-4 lg:w-[58%] lg:py-24">
          <About />
          <Experience />
          <Cambridge />
          <Results />
          <Teaching />
          <Qualifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}
