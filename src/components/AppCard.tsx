
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AppCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  onClick?: () => void;
}

const AppCard: React.FC<AppCardProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  bgColor, 
  iconColor,
  onClick 
}) => {
  return (
    <div 
      className="app-card group animate-fade-in"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon Container */}
        <div 
          className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        
        {/* Title */}
        <h3 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-xs text-gray-600 leading-tight">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
