import React from "react";
import Header from "./Header";
import Hero from "./Hero";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="bg-[#242424] text-white min-h-screen snap-y z-0 snap-mandatory">
      <Header />

      {/* HERO */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* ABOUT */}

      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </div>
  );
};

export default App;
