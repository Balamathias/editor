"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FancyHeading from "@/components/fancy-heading";
import FancyText from "@/components/fancy-text";

interface Flashcard {
  question: string;
  answer: string;
}

interface FlashcardsProps {
  flashcards: Flashcard[];
}

const FlashcardsGrid: React.FC<FlashcardsProps> = ({ flashcards }) => {
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  const handleFlip = (index: number) => {
    setFlippedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col gap-y-4">
      <FancyHeading>FlashCards</FancyHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcards.map((flashcard, index) => (
          <motion.div
            key={index}
            onClick={() => handleFlip(index)}
            className="relative w-full h-40 bg-card dark:bg-secondary/95 text-center shadow-lg rounded-lg cursor-pointer"
            initial={{ opacity: 0, rotateY: 0 }}
            animate={{ opacity: 1, rotateY: flippedIndices.includes(index) ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="p-4 text-lg font-semibold">
                <FancyText>{flashcard.question}</FancyText>
              </div>
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white rounded-lg backface-hidden"
              style={{
                backfaceVisibility: !flippedIndices.includes(index) ? "hidden" : "visible",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="p-4 text-lg font-semibold">
                {flashcard.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardsGrid;
