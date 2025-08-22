"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "La atención al detalle y la innovación en las automatizaciones transformaron completamente nuestro negocio.",
      name: "Vladyslav Greziev",
      designation: "CEO de Lobbyx",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzE3MDM4OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      quote:
        "La implementación fue sencilla y los resultados superaron nuestras expectativas.",
      name: "Nathan Seidle",
      designation: "Fundador de Startup SparkFun",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Gracias a Airvon Studio ahora ahorramos horas de trabajo cada semana con flujos inteligentes.",
      name: "Mark Johnson",
      designation: "Manager en Tech Solutions",
      src: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section 
      id="testimonials" 
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container px-4 md:px-6">
         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <motion.h2 
              variants={textVariants}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground"
            >
                Lo que dicen nuestros clientes
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Testimonios reales sobre el impacto de la IA en sus negocios.
            </motion.p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </motion.section>
  );
}
