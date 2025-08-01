import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      {/* House Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-green-700 to-green-800 rounded-lg flex items-center justify-center shadow-lg`}>
        <svg 
          viewBox="0 0 24 24" 
          className={`${size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-7 h-7' : 'w-10 h-10'} text-white`}
          fill="currentColor"
        >
          {/* Outer house */}
          <path d="M12 2L2 9v11h20V9L12 2z" />
          {/* Inner house */}
          <path d="M8 14h8v6H8v-6z" />
          {/* Door */}
          <path d="M10 16h4v4h-4v-4z" />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-green-700 ${textSizes[size]}`}>
            FURU
          </span>
          <span className={`font-medium text-green-600 ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}`}>
            HOMES
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo; 