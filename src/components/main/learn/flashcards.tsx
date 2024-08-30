'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import FancyHeading from "@/components/fancy-heading";
import FancyText from "@/components/fancy-text";

interface Flashcard {
  question: string;
  answer: string;
}

interface FlashcardsProps {
  flashcards: Flashcard[];
}

const Flashcards: React.FC<FlashcardsProps> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="flex flex-col gap-y-4">

      <FancyHeading>FlashCards</FancyHeading>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          onClick={handleFlip}
          className="relative w-64 h-40 bg-card/70 text-center shadow-lg rounded-lg cursor-pointer flex flex-col gap-y-4"
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: isFlipped ? 180 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="p-4 text-lg font-semibold">
              <FancyText>{flashcards[currentIndex].question}</FancyText>
            </div>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white rounded-lg backface-hidden"
            style={{
              backfaceVisibility: !isFlipped ? "hidden" : "visible",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="p-4 text-lg font-semibold">
              {flashcards[currentIndex].answer}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <Button
        onClick={handleNext}
        className="w-64"
        variant={'secondary'}
      >
        Next
      </Button>
    </div>
  );
};

export default Flashcards;
