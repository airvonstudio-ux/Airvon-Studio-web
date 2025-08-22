"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotMessageSquare, Zap, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Zap,
    title: "Automatizaciones Inteligentes",
    description: "Optimizamos tus flujos de trabajo, automatizando tareas repetitivas para que tu equipo se concentre en el crecimiento y la estrategia."
  },
  {
    icon: BotMessageSquare,
    title: "Chatbots Avanzados",
    description: "Creamos asistentes virtuales personalizados que mejoran la atención al cliente, capturan leads y operan 24/7 de forma eficiente."
  },
  {
    icon: Lightbulb,
    title: "Consultoría en IA",
    description: "Te guiamos en la implementación de soluciones de IA, identificando oportunidades clave para transformar y potenciar tu negocio."
  }
]

export function ServicesSection() {
    const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 120, damping: 15 } 
    },
  };

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <motion.div 
        className="container px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Soluciones a la medida para potenciar tu empresa con Inteligencia Artificial.
          </motion.p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-card border-border/50 hover:border-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-accent/10 hover:shadow-xl flex flex-col h-full">
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-accent/10">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
