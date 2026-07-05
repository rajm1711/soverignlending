import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'light' | 'dark' | 'gold';
}

export function Logo({ variant = 'gold', className = "w-8 h-8", ...props }: LogoProps) {
  const bg = variant === 'gold' ? '#D4AF37' : variant === 'dark' ? '#1A1A1A' : '#FFFFFF';
  const fg = variant === 'gold' ? '#FFFFFF' : variant === 'dark' ? '#D4AF37' : '#1A1A1A';
  
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Background shape */}
      <rect width="100" height="100" rx="24" fill={bg} />
      
      {/* Elegant minimalist 'S' */}
      <path 
        d="M66 38 C66 22, 34 22, 34 38 C34 54, 66 46, 66 62 C66 78, 34 78, 34 62" 
        stroke={fg} 
        strokeWidth="12" 
        strokeLinecap="round" 
      />
    </svg>
  );
}
