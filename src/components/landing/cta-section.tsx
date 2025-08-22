"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CtaSection() {

  const variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8 
      } 
    },
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
      >
        <div className="mx-auto max-w-3xl text-center p-8 md:p-12 rounded-2xl bg-card border-2 border-transparent relative overflow-hidden cta-glow-border">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            Hablemos sobre tu proyecto
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Descubre cómo la IA puede transformar tu negocio. Agenda una consulta gratuita y sin compromiso.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="primary-gradient text-white font-bold text-lg px-8 py-6 rounded-lg hover:scale-105 hover:glow-effect transition-all duration-300">
              <a href="https://wa.me/543516247707" target="_blank" rel="noopener noreferrer">
                Contáctanos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
       <style jsx>{`
        .cta-glow-border {
          border-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent))) 1;
          box-shadow: 0 0 25px hsl(var(--primary) / 0.2), 0 0 25px hsl(var(--accent) / 0.2);
        }
      `}</style>
    </section>
  );
}
