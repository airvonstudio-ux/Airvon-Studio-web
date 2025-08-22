"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export function AnimatedTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Autoplay every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center h-[28rem] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center text-center"
        >
          <Image
            src={testimonials[currentIndex].src}
            alt={testimonials[currentIndex].name}
            width={100}
            height={100}
            className="rounded-full w-24 h-24 object-cover mb-6 border-2 border-primary"
            data-ai-hint="person portrait"
          />
          <p className="text-lg md:text-xl font-light text-muted-foreground mb-4">
            "{testimonials[currentIndex].quote}"
          </p>
          <h3 className="font-bold text-lg text-foreground">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm text-primary">
            {testimonials[currentIndex].designation}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-card/50 text-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-card/50 text-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
