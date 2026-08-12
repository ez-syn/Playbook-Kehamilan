import React from 'react';

export const BotanicalBranch: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-12 h-12", 
  color = "#B8C9B4" 
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M20 80C35 65 50 40 75 20M35 65C30 55 22 55 22 55C22 55 30 45 40 55M50 48C45 38 37 38 37 38C37 38 45 28 55 38M65 32C60 22 52 22 52 22C52 22 60 12 70 22" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const BotanicalFlower: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-12 h-12", 
  color = "#D9828B" 
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="8" fill={color} opacity="0.3" />
    <path 
      d="M50 22C50 22 42 35 50 42C58 35 50 22 50 22ZM50 78C50 78 42 65 50 58C58 65 50 78 50 78ZM22 50C22 50 35 42 42 50C35 58 22 50 22 50ZM78 50C78 50 65 42 58 50C65 58 78 50 78 50Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
  </svg>
);

export const EditorialBannerDecoration: React.FC = () => (
  <div className="flex items-center justify-center gap-3 my-4 opacity-70">
    <div className="h-[1px] w-12 bg-[#EADDDD]"></div>
    <BotanicalBranch className="w-5 h-5" color="#B8C9B4" />
    <span className="text-xs uppercase tracking-widest text-[#776B6D] font-medium">EZPlan Guide</span>
    <BotanicalBranch className="w-5 h-5 transform -scale-x-100" color="#B8C9B4" />
    <div className="h-[1px] w-12 bg-[#EADDDD]"></div>
  </div>
);
