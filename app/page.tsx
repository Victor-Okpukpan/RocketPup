"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TokenPrice from "../components/TokenPrice";
import Countdown from "../components/Countdown";
import Roadmap from "../components/Roadmap";
import MascotAnimation from "../components/MascotAnimation";
import { Rocket, Github, Twitter } from "lucide-react";
import Tokenomics from "../components/Tokenomics";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <MascotAnimation />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
            🚀 <span className="clip-text">RocketPup</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The first memecoin to actually reach Mars! Join our intergalactic
            journey with the goodest boy in crypto.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Rocket className="w-4 h-4" />
              Buy RocketPup
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary/20 hover:bg-primary/10"
            >
              Read Whitepaper
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-7">
        <div className="grid md:grid-cols-2 gap-8">
          <TokenPrice />
          <Countdown />
        </div>
      </section>

       {/* Tokenomics Section */}
       <section className="container mx-auto px-4 py-16">
        <Tokenomics />
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-7">
        <Roadmap />
      </section>

      {/* Fun Facts Section */}
      <section className="container mx-auto px-4 py-7">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-card rounded-lg p-8 shadow-lg shadow-primary/5"
        >
          <h2 className="text-3xl font-bold mb-6 clip-text">
            The Legend of RocketPup
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Legend has it that RocketPup was just an ordinary Shiba Inu until he
            accidentally ate a USB drive containing 1,000 Bitcoin in 2013. Since
            then, he gained the ability to predict crypto markets and an
            inexplicable desire to colonize Mars.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Now, he leads a community of space-traveling crypto enthusiasts on a
            mission to establish the first dog park on Mars. 🌕
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary"
          >
            <Twitter className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary"
          >
            <Github className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          © 2024 RocketPup. To the Moon and Beyond! 🚀
        </p>
      </footer>
    </main>
  );
}
