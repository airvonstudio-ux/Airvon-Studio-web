"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Gem } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 150, damping: 20 } },
  };

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
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
            Tu Aliado Estratégico en IA
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Adaptamos la inteligencia artificial a tu negocio, integrando soluciones que te permiten innovar, escalar y concentrarte en lo que realmente importa: la calidad y el crecimiento de tu empresa.
          </motion.p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <motion.div variants={cardVariants}>
            <Card className="bg-card border-border/50 hover:border-primary transition-all duration-300 hover:shadow-primary/10 hover:shadow-lg h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ayudar a las empresas a ahorrar tiempo y recursos, preparándolas para crecer y mantenerse competitivas en la era digital mediante automatizaciones y chatbots personalizados.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card className="bg-card border-border/50 hover:border-primary transition-all duration-300 hover:shadow-primary/10 hover:shadow-lg h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser el aliado estratégico de cada cliente y expandir nuestra oferta a formación en IA, para que más personas y empresas en la región aprovechen el poder de estas herramientas.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card className="bg-card border-border/50 hover:border-primary transition-all duration-300 hover:shadow-primary/10 hover:shadow-lg h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gem className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Innovación, personalización total, confianza y un enfoque estratégico en potenciar el talento humano. Creemos que la tecnología no reemplaza, sino que potencia.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
