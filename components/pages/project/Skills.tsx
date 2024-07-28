"use client";
import React, { useRef, useEffect, useState } from "react";

const skills: string[] = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Webpack",
  "Redux",
];

interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <div className="flex items-center justify-center px-4 py-2 border border-white text-white rounded-lg shadow-md m-2 flex-shrink-0">
    <p className="text-lg font-semibold">{skill}</p>
  </div>
);

interface SkillsProps {
  scrollSpeed?: number;
  scrollDirection?: "ltr" | "rtl";
}

const Skills: React.FC<SkillsProps> = ({
  scrollSpeed = 1,
  scrollDirection = "ltr",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    let animationFrameId: number;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const currentSpeed = isHovering ? scrollSpeed * 0.2 : scrollSpeed;
      const pixelsPerSecond = 50 * currentSpeed;
      const pixelsToMove = (pixelsPerSecond * deltaTime) / 1000;

      let newPosition: number;
      if (scrollDirection === "ltr") {
        newPosition = scrollPosition + pixelsToMove;
        if (newPosition > totalWidth - visibleWidth) {
          newPosition = 0;
        }
      } else {
        newPosition = scrollPosition - pixelsToMove;
        if (newPosition < 0) {
          newPosition = totalWidth - visibleWidth;
        }
      }

      setScrollPosition(newPosition);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollSpeed, scrollDirection, isHovering, scrollPosition]);

  return (
    <div className="w-full max-w-3xl mx-auto my-2">
      <div
        className="overflow-hidden"
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="flex transition-transform duration-100 ease-linear"
          style={{
            transform: `translateX(${-scrollPosition}px)`,
            animation: "scroll 10s linear infinite",
          }}
        >
          {[...skills].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
