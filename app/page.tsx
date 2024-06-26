import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Works />
        <About />
        <Contacts />
      </div>
    </main>
  );
}
