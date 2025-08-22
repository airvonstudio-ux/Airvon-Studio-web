"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { useMemo, useRef } from "react";
import { useMouse } from "react-use";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { elX, elY } = useMouse(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const gradientX = useMemo(() => {
    if (typeof elX === 'number' && ref.current) {
      return (elX / ref.current.offsetWidth) * 100;
    }
    return 50;
  }, [elX, ref.current?.offsetWidth]);

  const gradientY = useMemo(() => {
    if (typeof elY === 'number' && ref.current) {
      return (elY / ref.current.offsetHeight) * 100;
    }
    return 50;
  }, [elY, ref.current?.offsetHeight]);

  return (
    <section 
      ref={ref}
      className="relative w-full min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-background"
      style={{
        backgroundImage: `radial-gradient(circle at ${gradientX}% ${gradientY}%, hsl(var(--primary) / 0.15), hsl(var(--background)) 40%)`
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="container relative z-10 flex flex-col items-center gap-6 px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground"
        >
          Airvon Studio – Inteligencia Artificial para tu negocio
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-[700px] text-muted-foreground md:text-xl"
        >
          Automatizaciones, Chatbots y Soluciones con IA para crecer más rápido
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button asChild size="lg" className="primary-gradient text-white font-bold text-lg px-8 py-6 rounded-lg hover:scale-105 hover:glow-effect transition-all duration-300">
            <a href="https://wa.me/543516247707" target="_blank" rel="noopener noreferrer">
              Agenda tu consulta gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
       <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
