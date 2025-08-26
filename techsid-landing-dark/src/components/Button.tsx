import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer";
    
    const variants = {
      primary: "bg-gradient-brand hover:bg-gradient-brand-hover text-primary-foreground shadow-brand hover:shadow-glow border-2 border-transparent hover:scale-105 font-semibold",
      secondary: "bg-transparent border-2 border-border text-foreground hover:bg-card-hover hover:border-brand/50 backdrop-blur-sm font-medium",
      ghost: "text-muted-foreground hover:text-foreground hover:bg-card/50"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";