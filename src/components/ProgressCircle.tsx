"use client";

import { useEffect, useState } from "react";
import { getScoreTier, SCORE_TIER_COLOR } from "@/utils/helpers";

interface ProgressCircleProps {
  score: number;
  maxScore?: number;
  size?: number;
}

export default function ProgressCircle({ score, maxScore = 100, size = 132 }: ProgressCircleProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const tier = getScoreTier(score);
  const color = SCORE_TIER_COLOR[tier];

  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(animatedScore / maxScore, 1);
  const offset = circumference * (1 - progress);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimatedScore(score));
    return () => cancelAnimationFrame(frame);
  }, [score]);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-surface-muted)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1), stroke 300ms ease" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-mono-num text-[26px] font-semibold leading-none" style={{ color }}>
          {score}
        </span>
        <span className="mt-1 text-[11px] text-[var(--color-text-faint)]">/ {maxScore}</span>
      </div>
    </div>
  );
}
