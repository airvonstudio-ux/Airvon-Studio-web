"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function PortfolioSection() {
  const portfolioItems = [
    { src: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhdXRvbWF0aW9uJTIwY2FsZW5kYXJ8ZW58MHx8fHwxNzE3MDM4OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Calendario automatizado", hint: "automation calendar" },
    { src: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8c29mdHdhcmUlMjBjb24lMjBJQXxlbnwwfHx8fDE3NTU4ODUwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Chatbot mockup", hint: "chatbot interface" },
    { src: "https://images.unsplash.com/photo-1603201667230-bd139210db18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8VGVhbSUyMHdvcmslMjB3YXRjaGluZyUyMGElMjBsYXB0b3B8ZW58MHx8fHwxNzU1ODkwMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Workflow mockup", hint: "automation workflow" },
    { src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8d2ViJTIwZGVzaWduZXJ8ZW58MHx8fHwxNzU1ODkxMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Analytics mockup", hint: "data analytics" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(5px)" },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: "blur(0px)", 
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    },
  };

  return (
    <section id="portfolio" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <motion.div 
        className="container px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2 
            variants={textVariants}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground"
          >
            Lo que podemos hacer
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Ejemplos ilustrativos para mostrar la calidad y versatilidad de nuestro trabajo.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
             <motion.div key={index} variants={cardVariants}>
              <Card className="overflow-hidden group bg-card border-border/50 hover:border-primary transition-all duration-300">
                <CardContent className="p-0">
                  <Image
                    alt={item.alt}
                    className="object-cover w-full h-auto aspect-video group-hover:scale-105 transition-transform duration-500"
                    height="400"
                    src={item.src}
                    width="600"
                    data-ai-hint={item.hint}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
