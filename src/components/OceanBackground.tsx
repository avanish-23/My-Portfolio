import type { CSSProperties } from "react";

type BubbleStyle = CSSProperties & {
  "--size": string;
  "--left": string;
  "--duration": string;
  "--delay": string;
};

const bubbles = [
  { size: 18, left: "6%", duration: 12, delay: 0 },
  { size: 34, left: "14%", duration: 18, delay: 2 },
  { size: 22, left: "22%", duration: 15, delay: 5 },
  { size: 12, left: "29%", duration: 11, delay: 1 },
  { size: 28, left: "37%", duration: 17, delay: 3 },
  { size: 16, left: "45%", duration: 14, delay: 0 },
  { size: 40, left: "53%", duration: 20, delay: 4 },
  { size: 20, left: "61%", duration: 16, delay: 1 },
  { size: 14, left: "69%", duration: 13, delay: 6 },
  { size: 32, left: "77%", duration: 19, delay: 2 },
  { size: 18, left: "85%", duration: 15, delay: 5 },
  { size: 24, left: "92%", duration: 17, delay: 1 },
];

export default function OceanBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="ocean-aurora" />
      <div className="ocean-rings" />
      <div className="ocean-floor" />

      {bubbles.map((bubble, index) => (
        <span
          key={`${bubble.left}-${index}`}
          className="ocean-bubble"
          style={
            {
              "--size": `${bubble.size}px`,
              "--left": bubble.left,
              "--duration": `${bubble.duration}s`,
              "--delay": `${bubble.delay}s`,
            } as BubbleStyle
          }
        />
      ))}

      <div className="light-beam light-beam-left" />
      <div className="light-beam light-beam-right" />
    </div>
  );
}
