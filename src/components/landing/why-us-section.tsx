"use client";

import { Users, Target, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Nos convertimos en tu aliado estratégico, con un trato cercano y enfocado 100% en tus metas."
  },
  {
    icon: Target,
    title: "Soluciones a Medida",
    description: "No usamos plantillas. Cada sistema se diseña y construye desde cero para tus necesidades."
  },
  {
    icon: Cpu,
    title: "Tecnología Avanzada",
    description: "Implementamos las herramientas de IA más innovadoras y eficientes del mercado para darte una ventaja competitiva."
  },
  {
    icon: ShieldCheck,
    title: "Soporte Confiable",
    description: "Te acompañamos en cada paso, asegurando que la tecnología funcione y tu equipo la domine."
  }
]

export function WhyUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
  };

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    },
  };

  return (
    <section id="why-us" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <motion.div 
        className="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="space-y-3">
          <motion.h2 
            variants={textVariants}
            className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
          >
            ¿Por qué Airvon Studio?
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Más que un proveedor, somos tu socio en innovación.
          </motion.p>
        </div>
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center space-y-3"
              variants={featureVariants}
            >
              <div className="p-3 rounded-full bg-primary/10 border-2 border-primary/20">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
