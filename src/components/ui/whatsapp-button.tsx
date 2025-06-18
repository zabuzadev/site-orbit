import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const WhatsAppButton = React.forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  ({ className, variant = 'default', size = 'default', fullWidth = false, children, ...props }, ref) => {
    const baseStyles = {
      default: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-700/30',
      outline: 'border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-700 hover:text-emerald-800'
    };

    const sizeStyles = {
      default: 'py-3 px-4 text-sm',
      sm: 'py-2 px-3 text-xs',
      lg: 'py-4 px-6 text-base'
    };

    return (
      <Button
        ref={ref}
        variant={variant === 'outline' ? 'outline' : 'default'}
        className={cn(
          baseStyles[variant],
          sizeStyles[size],
          fullWidth ? 'w-full' : '',
          'font-medium transition-all duration-300 flex items-center justify-center space-x-2',
          className
        )}
        {...props}
      >
        <MessageCircle className={cn(
          'flex-shrink-0',
          size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
        )} />
        <span>{children}</span>
      </Button>
    );
  }
);

WhatsAppButton.displayName = 'WhatsAppButton';

export { WhatsAppButton }; 