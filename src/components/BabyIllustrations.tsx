import React from 'react';

// Cute Baby Face / Sleeping Baby Icon
export const BabyFaceIcon: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#B9626D"
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Head circle */}
    <circle cx="32" cy="34" r="20" fill="#FFF2EE" stroke={color} strokeWidth="3" />
    {/* Baby bonnet / hat arc */}
    <path d="M14 30C14 20 22 12 32 12C42 12 50 20 50 30" fill="#F8E3E5" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Hat knot / pompom */}
    <circle cx="32" cy="10" r="4" fill={color} />
    {/* Sleeping eyes */}
    <path d="M22 34C24 37 26 37 28 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M36 34C38 37 40 37 42 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Rosy Cheeks */}
    <circle cx="21" cy="39" r="2.5" fill="#E89FA8" opacity="0.7" />
    <circle cx="43" cy="39" r="2.5" fill="#E89FA8" opacity="0.7" />
    {/* Sweet Smile */}
    <path d="M29 42C31 44 33 44 35 42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Cute Baby Footprints
export const BabyFootprintsIllustration: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#B9626D"
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left Foot Main Soles */}
    <ellipse cx="24" cy="38" rx="7" ry="11" transform="rotate(-15 24 38)" fill="#F8E3E5" stroke={color} strokeWidth="2.5" />
    {/* Left Foot Toes */}
    <circle cx="17" cy="22" r="2.5" fill={color} />
    <circle cx="22" cy="20" r="2" fill={color} />
    <circle cx="26" cy="21" r="1.8" fill={color} />
    <circle cx="29" cy="23" r="1.5" fill={color} />
    <circle cx="31" cy="26" r="1.2" fill={color} />

    {/* Right Foot Main Soles */}
    <ellipse cx="40" cy="34" rx="7" ry="11" transform="rotate(15 40 34)" fill="#F8E3E5" stroke={color} strokeWidth="2.5" />
    {/* Right Foot Toes */}
    <circle cx="47" cy="18" r="2.5" fill={color} />
    <circle cx="42" cy="16" r="2" fill={color} />
    <circle cx="38" cy="17" r="1.8" fill={color} />
    <circle cx="35" cy="19" r="1.5" fill={color} />
    <circle cx="33" cy="22" r="1.2" fill={color} />
  </svg>
);

// Cute Baby Stroller Icon
export const BabyStrollerIllustration: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#8C4B2F"
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stroller Body Hood */}
    <path d="M16 32C16 22 24 16 36 16V36H16V32Z" fill="#F8E3E5" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    {/* Stroller Seat Base */}
    <path d="M16 36C16 42 22 46 32 46H42V36H16Z" fill="#FFF2EE" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    {/* Push Handle */}
    <path d="M42 24L52 14H56" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Wheels */}
    <circle cx="24" cy="52" r="5" fill="#FFFFFF" stroke={color} strokeWidth="3" />
    <circle cx="40" cy="52" r="5" fill="#FFFFFF" stroke={color} strokeWidth="3" />
    {/* Wheel Hubs */}
    <circle cx="24" cy="52" r="1.5" fill={color} />
    <circle cx="40" cy="52" r="1.5" fill={color} />
  </svg>
);

// Cute Baby Onesie / Suit
export const BabyOnesieIcon: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#9B414C"
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Onesie Body */}
    <path 
      d="M22 14C24 18 40 18 42 14L54 22L48 30L44 26V46C44 48 40 50 38 50H36C34 46 30 46 28 50H26C24 50 20 48 20 46V26L16 30L10 22L22 14Z" 
      fill="#FFF2EE" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Neckline */}
    <path d="M25 14C27 20 37 20 39 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Center Heart Emblem */}
    <path d="M32 35C32 35 27 31 27 28C27 26 29 25 30.5 26.5C32 28 32 28 32 28C32 28 32 28 33.5 26.5C35 25 37 26 37 28C37 31 32 35 32 35Z" fill="#F8E3E5" stroke={color} strokeWidth="2" />
  </svg>
);

// Cute Baby Bottle Icon
export const BabyBottleIcon: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#3D5C37"
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Bottle Body */}
    <rect x="22" y="26" width="20" height="28" rx="5" fill="#FFF9F6" stroke={color} strokeWidth="3" />
    {/* Bottle Ring / Cap */}
    <rect x="20" y="20" width="24" height="6" rx="2" fill="#E7EFE4" stroke={color} strokeWidth="2.5" />
    {/* Teat / Nipple */}
    <path d="M27 20C27 15 29 12 32 12C35 12 37 15 37 20" fill="#F6DFD2" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Measurement lines */}
    <line x1="36" y1="32" x2="39" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="36" y1="38" x2="39" y2="38" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="36" y1="44" x2="39" y2="44" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
